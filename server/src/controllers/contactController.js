
const cleanText = value => String(value ?? '').trim();
const hasHeaderBreak = value => /[\r\n]/.test(value);

export async function submitContact(req, res) {
  const { name, email, subject, message, website, phone } = req.body || {};

  // Honeypot: return a generic success response to automated spam without sending email.
  if (cleanText(website)) return res.status(200).json({ success: true, message: 'Your message has been submitted successfully.' });

  const safeName = cleanText(name);
  const safeEmail = cleanText(email);
  const safeSubject = cleanText(subject);
  const safeMessage = cleanText(message);
  const safePhone = cleanText(phone);

  if (!safeName || !safeEmail || !safeSubject || !safeMessage) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }
  if (safeName.length > 100 || safeEmail.length > 254 || safeSubject.length > 160 || safeMessage.length > 5000 || safePhone.length > 20) {
    return res.status(400).json({ success: false, message: 'One or more fields exceed the allowed length.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail) || hasHeaderBreak(safeEmail) || hasHeaderBreak(safeSubject) || (safePhone && (!/^[+()\-\s\d]{7,20}$/.test(safePhone) || hasHeaderBreak(safePhone)))) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email, subject, and message.' });
  }
  if (safeMessage.length < 10) {
    return res.status(400).json({ success: false, message: 'Please write a message with at least 10 characters.' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return res.status(503).json({ success: false, message: 'Email service is not configured yet.' });
    const recipient = process.env.EMAIL_TO || process.env.CONTACT_EMAIL;
    if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
      return res.status(503).json({ success: false, message: 'The contact email service is not configured yet.' });
    }
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: [recipient],
        reply_to: safeEmail,
        subject: `Portfolio enquiry: ${safeSubject}`,
         text: `New portfolio contact form submission\n\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone || 'Not provided'}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}\n`,
         html: `<h2>New portfolio enquiry</h2><table style="border-collapse:collapse;width:100%;max-width:600px"><tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(safeName)}</td></tr><tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(safeEmail)}</td></tr><tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Phone</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(safePhone || 'Not provided')}</td></tr><tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Subject</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(safeSubject)}</td></tr><tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;vertical-align:top">Message</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(safeMessage)}</td></tr></table>`
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) { console.error('Resend error:', response.status, JSON.stringify(result)); throw new Error('Resend request failed'); }
    return res.status(200).json({ success: true, message: 'Your message has been submitted successfully.' });
  } catch (error) {
    console.error('Contact email submission failed:', error?.message || 'Unknown email error');
    return res.status(502).json({ success: false, message: 'Unable to send your message right now. Please try again later or email directly.' });
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
