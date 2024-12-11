import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

// Load middlewares
app.use(express.json());

// Load routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
