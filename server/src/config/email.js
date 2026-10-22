import nodemailer from 'nodemailer';

export function createEmailTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(SMTP_PORT || 587);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isFinite(port)) {
    throw new Error('Email service is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS and SMTP_PORT in the server environment.');
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: String(SMTP_SECURE).toLowerCase() === 'true' || port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
  });
}
