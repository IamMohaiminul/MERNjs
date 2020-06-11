import mongoose, { Schema } from 'mongoose';

// create a blogSchema
export const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required.'],
    },
    description: {
      type: String,
      required: [true, 'Blog description is required.'],
    },
    category: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
    _createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Blog created by is required.'],
    },
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false },
);

/*
 * userSchema middlewares
 */

// on every save, add the date
blogSchema.pre('save', function (next) {
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
const Blog = mongoose.model('Blog', blogSchema);

// make this available to our users in our Node applications
export default Blog;
