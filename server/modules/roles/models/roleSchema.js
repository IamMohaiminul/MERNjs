'use strict';

import mongoose, { Schema } from 'mongoose';

// create a roleSchema
export const roleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    unique: true
  },
  hierarchy: {
    type: Number,
    required: [true, 'Hierarchy is required.'],
    unique: true
  },
  permission: {
    type: Schema.Types.Mixed,
    required: [true, 'Permission is required.']
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  },
  createdAt: Date,
  updatedAt: Date,
}, { versionKey: false });

// on every save, add the date
roleSchema.pre('save', function (next) {
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

// the schema is useless so far
// we need to create a model using it
const Role = mongoose.model('Role', roleSchema);

// make this available to our users in our Node applications
export default Role;
