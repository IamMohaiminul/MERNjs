import Blog from '../models/index';

/**
 * get blogs
 */
export function getAllBlog(req, res, next) {
  console.log('getAllBlog(): ', req.params, req.body, req.auth);
  Blog.find({})
    .sort({
      createdAt: -1,
    })
    .populate('_createdBy', '-password')
    .exec((err, blogs) => {
      if (err) return next(err);

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
  console.log('addBlog(): ', req.params, req.body, req.auth);
  const newBlog = new Blog();
  Object.assign(newBlog, req.body, {
    _createdBy: req.auth._id,
  });
  newBlog.save((err, blog) => {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created blog!',
      data: blog,
    });
  });
}

/**
 * get blog by id
 */
export function getBlog(req, res, next) {
  console.log('getBlog(): ', req.params, req.body, req.auth);
  Blog.findById(req.params._id)
    .populate('_createdBy', '-password')
    .exec((err, blog) => {
      if (err) return next(err);

      return res.status(200).json({
        success: true,
        message: 'Get blog',
        data: blog,
      });
    });
}
