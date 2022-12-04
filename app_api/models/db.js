const mongoose = require('mongoose');
require('dotenv').config(); 
const dbURI = process.env.DB_URI;
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./workouts');
require('./users');

