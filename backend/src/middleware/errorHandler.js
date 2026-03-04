/* eslint-disable no-undef */
export default function errorHandler(err, req, res) {
  const status = err.status || 500;
  const message = err.message || 'Server Error';

  if (req.accepts('html')) {
    // serve custom error page if available
    const page = `${status}.shtml`;
    res.status(status).sendFile(page, { root: process.cwd() + '/public' }, (e) => {
      if (e) {
        res.status(status).json({ error: message });
      }
    });
  } else {
    res.status(status).json({ error: message });
  }
}
