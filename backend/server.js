import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import academyRoutes from './routes/academyRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//CONFIG & INIT
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/academies', academyRoutes);

// ERROR HANDLING MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

// LISTEN ON PORT
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
