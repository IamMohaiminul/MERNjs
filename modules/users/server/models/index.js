import mongoose, {
  Schema
} from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// create a schema
const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  createdAt: Date,
  updatedAt: Date
}, {
  versionKey: false
});

// on every save, add the date
userSchema.pre('save', function(next) {
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
 * Methods.......
 */

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);


// make this available to our users in our Node applications
export default User;
