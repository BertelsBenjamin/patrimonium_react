import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import academyRoutes from './routes/academyRoutes.js';
import pianoRoutes from './routes/pianoRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//CONFIG & INIT
dotenv.config();
const app = express();

connectDB();

// ROUTES
app.use('/api/academies', academyRoutes);
app.use('/api/pianos', pianoRoutes);

// ERROR HANDLING MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

// LISTEN
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
