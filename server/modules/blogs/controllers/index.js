import Blog from '../models/index.js';

/**
 * get blogs
 */
export function getAllBlog(req, res, next) {
  Blog.find({
    status: 'Active',
  }).sort({
    createdAt: -1,
  }).populate('_createdBy').exec((err, blogs) => {
    if (err) return next(err);
    console.log('getAllBlog(blogs): ', blogs);
    return res.status(200).json({
      success: true,
      message: 'Get all blog',
      data: blogs,
    });
  });
}

/**
 * add blog
 */
export function addBlog(req, res, next) {
  console.log('addBlog(req.body): ', req.body);
  let newBlog = new Blog();
  Object.assign(newBlog, req.body, {
    _createdBy: req.authUser._id,
  });
  console.log('addBlog(newBlog): ', newBlog);
  newBlog.save(function (err, blog) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created blog!',
      data: blog,
    });
  });
}

/**
 * get blog
 */
export function getBlog(req, res, next) {
  Blog.findById(req.params._id).populate('_createdBy').exec((err, blog) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get blog',
      data: blog,
    });
  });
}
