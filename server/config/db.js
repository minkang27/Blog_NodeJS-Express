const mongoose = require('mongoose');
// const connectDB = async () => {
  
//   try {
//     mongoose.set('strictQuery', false);
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`Database Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
 
// }

// filepath: /Users/minkang/Downloads/25.NodeJs-Express-EJS-MongoDB--Blog-main/server/config/db.js

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


