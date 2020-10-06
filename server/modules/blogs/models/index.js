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
  },
  { timestamps: true, versionKey: false },
);

// the schema is useless so far
// we need to create a model using it
const Blog = mongoose.model('Blog', blogSchema);

// make this available to our users in our Node applications
export default Blog;
