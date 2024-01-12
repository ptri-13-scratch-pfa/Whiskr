const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const loginRoute = require("./routes/loginRoutes");

const app = express();
const PORT = 3000;

const Profile = require("./models/models.js");


const MONGO_URI = 'mongodb+srv://01dukedomlockers:32AGNWM2EbPmJjG1@cluster1.t8kdtqj.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'whiskr'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


//process.env.SERV_PORT
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// app.use("/login", loginRoute);

app.get('/', async (req, res) => {
  await Profile.Profile.create({
    "id": 2,
    "email": "jkshdlg@gmail.com",
    "age": 90,
    "name": "halkjshd"
})
  res.status(200).json("Get request to / works!");
})


module.exports = app;