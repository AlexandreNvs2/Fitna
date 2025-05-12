// import mongoose from 'mongoose'

// const UsersSchema = mongoose.Schema({
//     name: {
//         type: String,
//     },

//     lastName : {
//         type: String,
//     },

//     mail: {
//         type: String
//     },

//     phone: {
//         type: Number
//     },

//     paswword: {
//         type: String
//     },
//     date_log: {
//         type: date.now()
//     }

    

// })


// const Users = mongoose.model('USER', UsersSchema)

// export default Users


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone :  { type: Number, required: true, unique: false},
   date_log: {type: date.now()},


  performances: [{
    date: { type: Date, default: Date.now },
    exercise: String,
    reps: Number,
    weight: Number,
  }],

  programs: [{
    name: String,
    description: String,
    days: [{
      day: String, // ex: 'Lundi'
      exercises: [{
        name: String,
        sets: Number,
        reps: Number,
        rest: String,
      }]
    }]
  }]
});

// Hash du mot de passe avant sauvegarde
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Vérification du mot de passe
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
export default Users