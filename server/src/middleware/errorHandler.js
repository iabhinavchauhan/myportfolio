export function notFound(req, res) {
  res.status(404).json({ success: false, message: 'Endpoint not found.' });
}
export function errorHandler(error, req, res, next) {
  console.error('Unhandled API error:', error?.message || 'Unknown error');
  if (res.headersSent) return next(error);
  res.status(500).json({ success: false, message: 'An unexpected server error occurred.' });
}
