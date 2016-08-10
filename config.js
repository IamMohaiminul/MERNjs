'use strict';

import moment from 'moment';

module.exports = {
  'MONGO_URL': 'mongodb://localhost:27017/MERNjs',
  'PORT': '3000',
  'BASE_URL': 'http://localhost:3000/',
  'JWT': {
    'SECRET': '474e6e206b7bef61c075693d99d690df',
    'EXPIRES': '1h'
  },
  'REACT_COOKIE': {
    'EXPIRES': moment().add(1, 'h').toDate()
  }
};
