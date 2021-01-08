import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import academies from './data/academies.js';
import pianos from './data/pianos.js';

import User from './models/userModel.js';
import Academy from './models/academyModel.js';
import Piano from './models/pianoModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

/* importData doesn't import sample interventions, only Users, Academies and Pianos */
const importData = async () => {
  try {
    await Intervention.deleteMany();
    await Piano.deleteMany();
    await Academy.deleteMany();
    await User.deleteMany();

    // INSERT USERS
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[2]._id; // 3rd user of the users.js is Benjamin Bertels, who's the only admin user.

    // INSERT ACADEMIES
    const sampleAcademies = academies.map((academy) => {
      return { ...academy, created_by_user: adminUser };
    });
    const createdAcademies = await Academy.insertMany(sampleAcademies);

    // INSERT PIANOS
    const samplePianos = pianos.map((piano) => {
      return { ...piano, academy_id: createdAcademies[0]._id }; // add sample pianos to first academy in the list.
    });
    await Piano.insertMany(samplePianos);

    console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Intervention.deleteMany();
    await Piano.deleteMany();
    await Academy.deleteMany();
    await User.deleteMany();

    console.log(`Data Destroyed`.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2]) {
  destroyData();
} else {
  importData();
}
