const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loginRoute = require("./routes/loginRoutes");
const signupRoute = require("./routes/signupRoutes.js");
const Profile = require("./models/models.js");

dotenv.config();
const app = express();
const PORT = 5656;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../build")));


const MONGO_URI = "mongodb+srv://01dukedomlockers:32AGNWM2EbPmJjG1@cluster1.t8kdtqj.mongodb.net/?retryWrites=true&w=majority";


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

app.use("/signup", signupRoute);

app.get('/', async (req, res) => {
  await Profile.Profile.create({
    "id": 2,
    "email": "jkshdlg@gmail.com",
    "age": 90,
    "name": "halkjshd"
})
  res.status(200).json("Get request to / works!");
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;