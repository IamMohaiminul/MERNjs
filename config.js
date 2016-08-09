'use strict';

module.exports = {
  'secret': '474e6e206b7bef61c075693d99d690df',
  'database': process.env.MONGO_URL || 'mongodb://localhost:27017/MERNjs',
  'port': process.env.PORT || '3000'
};
