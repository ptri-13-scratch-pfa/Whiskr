const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create schema below
const someSchema = new Schema({
  name: String,
  classification: String,
  average_height: String,
  average_lifespan: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  language: String,
  homeworld: String,
  homeworld_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }
});
*/

const profileSchema = new Schema({
  name: String,
  aboutMe: String,
  age: Number,
  role: String,
  pic1: String,
  pic2: String,
  pic3: String,
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})


const adopterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  aboutMe: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
})

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model('profile', profileSchema);
const User = mongoose.model('User', userSchema);
const Adopter = mongoose.model("Adopter", adopterSchema);
const Cat = mongoose.model("Cat", catSchema);

module.exports = { Profile, User, Adopter, Cat };