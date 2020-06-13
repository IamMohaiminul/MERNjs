import Blog from '../models/index';

/**
 * get blogs
 */
export function getAllBlog(req, res, next) {
  Blog.find({
    status: 'Active',
  })
    .sort({
      createdAt: -1,
    })
    .populate('_createdBy', '-status -createdAt -updatedAt')
    .exec((err, blogs) => {
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
  console.log('addBlog(): ', req.body, req.auth);
  const newBlog = new Blog();
  Object.assign(newBlog, req.body, {
    _createdBy: req.auth._id,
  });
  console.log('addBlog(newBlog): ', newBlog);
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
  Blog.findById(req.params._id)
    .populate('_createdBy')
    .exec((err, blog) => {
      if (err) return next(err);

      return res.status(200).json({
        success: true,
        message: 'Get blog',
        data: blog,
      });
    });
}
