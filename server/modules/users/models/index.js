import bcrypt from 'bcrypt-nodejs';
import mongoose, { Schema } from 'mongoose';

// create a userSchema
export const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full Name is required.'],
  },
  emailAddress: {
    type: String,
    required: [true, 'Email Address is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
  role: {
    type: String,
    enum: ['Subscriber', 'Administrator'],
    default: 'Subscriber',
  },
  createdAt: Date,
  updatedAt: Date,
}, { versionKey: false });

/*
 * userSchema middlewares
 */

// on every save, add the date
userSchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updatedAt = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }

  next();
});

/*
 * userSchema methods
 */

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
export default User;
