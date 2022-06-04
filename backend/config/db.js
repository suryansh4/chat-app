const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin-suryansh:suryanshpanwar@cluster0.snk5b.mongodb.net/newsletter?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};


module.exports = connectDB;