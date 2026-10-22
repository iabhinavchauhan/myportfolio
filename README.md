# Abhinav Chauhan — Animated MERN Portfolio

A resume-based, responsive portfolio built with React + Vite, Express, GSAP, Framer Motion, and React Three Fiber. The contact form sends messages directly to the configured inbox through the Render-hosted backend using SMTP. **There is no database or MongoDB dependency.**

## Features

- Dark, lime-accented creative portfolio layout.
- Animated hero with a Three.js / React Three Fiber orb.
- GSAP ScrollTrigger reveals and Framer Motion transitions.
- Resume-based About, skills, experience, projects, education, and certifications.
- Project detail modals and verified live project links from the resume.
- Download button serving the original resume PDF in `client/public/resume/`.
- Responsive navigation and mobile layout.
- Contact form with client/server validation, a honeypot, rate limiting, and email delivery through SMTP.
- Express health endpoint at `/api/health`.
- No database, MongoDB Atlas, or persistent contact-submission storage.

## Requirements

- Node.js 20 or newer recommended.
- npm.
- SMTP credentials for an email account/provider that permits sending mail.

## Local setup

From the project root:

```bash
npm install
npm run install:all
```

Copy `server/.env.example` to `server/.env` and set the SMTP values and recipient email. Do not commit `.env` files.

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
CONTACT_EMAIL=your-inbox@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

Copy `client/.env.example` to `client/.env` if desired. For local development, leave `VITE_API_BASE_URL` blank: Vite proxies `/api` to `http://localhost:5000`.

Start both services:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- API health check: http://localhost:5000/api/health

Build the frontend:

```bash
npm run build
```

## SMTP setup

Use SMTP credentials from your email provider or transactional email service. Typical SMTP settings vary by provider. Use the host, port, secure/TLS mode, username, and password provided by that service. Some providers require an app password or a verified sender address. Do not use your normal mailbox password unless the provider explicitly supports it.

The backend sends mail to `CONTACT_EMAIL`, uses `SMTP_USER` as the sender address, and sets the visitor's validated email as `Reply-To`. A successful response means the SMTP provider accepted the message for sending; it does not guarantee inbox delivery.

## Deploy backend to Render

1. Push the project to a Git repository.
2. Create a Render **Web Service** for the `server` directory, or configure the service root directory as `server`.
3. Runtime: Node.
4. Build command: `npm install`.
5. Start command: `npm start`.
6. Add the following environment variables in Render's dashboard:
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://YOUR-SITE.pages.dev` (use the exact deployed frontend origin; comma-separated origins are supported if needed)
   - `CONTACT_EMAIL=your-inbox@example.com`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
7. Deploy and open `https://YOUR-API.onrender.com/api/health`. It should return JSON with `success: true`.

Do not commit SMTP credentials to GitHub. Some SMTP providers restrict traffic from cloud hosts or require domain/sender verification; if your SMTP provider blocks Render, use a transactional email provider that supports an API or SMTP from Render.

## Deploy frontend to Cloudflare Pages

1. Create a Pages project connected to this repository.
2. Set the project root/build directory to `client` (or configure the monorepo build accordingly).
3. Build command: `npm install && npm run build`.
4. Build output directory: `dist`.
5. Add the environment variable `VITE_API_BASE_URL=https://YOUR-API.onrender.com`.
6. Deploy the Pages site.
7. Add the exact Pages origin to the Render `FRONTEND_URL` variable, then redeploy the backend if changed.

Vite environment variables are embedded at build time. Rebuild the frontend after changing `VITE_API_BASE_URL`.

## Contact form behavior

- API endpoint: `POST /api/contact`.
- The form sends JSON to the Express API.
- The server validates field lengths and email format, rejects header injection, applies rate limiting, and ignores bot submissions that fill the hidden honeypot field.
- No form submission is stored in a database.
- Configure SMTP credentials before testing successful delivery. Without SMTP settings, the API intentionally returns an error rather than pretending the message was sent.

Example test:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test Visitor","email":"visitor@example.com","subject":"Portfolio inquiry","message":"Hello, I would like to discuss a project.","website":""}'
```

## Resume and portfolio content

The source PDF is included at `client/public/resume/Abhinav-Chauhan-Resume.pdf`. Resume-derived portfolio content lives in `client/src/data/portfolio.js`, making text, skills, projects, experience, education, and certifications easy to update.

## Notes

- Live project links are included only where the resume supplied a URL.
- Source-code links are not invented when a repository URL was not listed in the resume.
- The abstract project preview visuals are custom CSS illustrations, not screenshots of the deployed projects.
- The 3D canvas is an enhancement; if WebGL is unavailable, the rest of the portfolio remains usable.
