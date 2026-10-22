import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173').split(',').map(origin => origin.trim()).filter(Boolean);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
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
