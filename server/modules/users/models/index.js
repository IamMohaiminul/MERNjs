/* eslint-disable func-names */
import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';

// create a userSchema
export const userSchema = new Schema(
  {
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
      // select: false,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
  },
  { timestamps: true, versionKey: false },
);

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
