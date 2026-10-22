import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
const normalizeOrigin = origin => origin.trim().replace(/\/+$/, '');
const allowedOrigins = new Set([
  'http://localhost:5173',
  'https://abhinavchauhan.pages.dev',
  ...(process.env.FRONTEND_URL || '').split(',').filter(Boolean)
].map(normalizeOrigin));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(normalizeOrigin(origin))) return callback(null, true);
    return callback(new Error('Origin is not allowed by CORS.'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400
}));
app.use(express.json({ limit: '20kb' }));
app.get('/api/health', (req, res) => res.status(200).json({ success: true, status: 'ok', service: 'portfolio-api' }));
app.use('/api/contact', (req, res, next) => {
  // Reject unexpected content types for contact submissions.
  if (req.method === 'POST' && !req.is('application/json')) return res.status(415).json({ success: false, message: 'Content-Type must be application/json.' });
  next();
}, contactRoutes);
app.use(notFound);
app.use(errorHandler);
export default app;
