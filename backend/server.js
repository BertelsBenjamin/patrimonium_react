import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import academyRoutes from './routes/academyRoutes.js';
import pianoRoutes from './routes/pianoRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//CONFIG & INIT
dotenv.config();
const app = express();
app.use(express.json()); // accept raw JSON in POST requests. Initiate this before the routes.

connectDB();

// ROUTES
app.use('/api/academies', academyRoutes);
app.use('/api/pianos', pianoRoutes);
app.use('/api/users', userRoutes);

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
