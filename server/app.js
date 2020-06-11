import 'app-module-path/register';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';
import { addPath } from 'app-module-path';

import api from './routes.js';

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
addPath(__dirname);

/* use RESTful APIs listing. */
app.use('/api', api);

/* use for admin app. */
app.get(['/admin', '/admin/*'], function (req, res) {
  res.render('index', {
    title: 'MERNjs - Admin',
    name: 'description',
    content: 'content',
    stylesheet:
      app.get('env') === 'production'
        ? '/dist/admin.bundle.min.css'
        : '/dist/admin.bundle.css',
    javascript:
      app.get('env') === 'production'
        ? '/dist/admin.bundle.min.js'
        : '/dist/admin.bundle.js',
  });
});

/* use for default app. */
app.get('*', function (req, res) {
  res.render('index', {
    title: 'MERNjs - Client',
    name: 'description',
    content: 'content',
    stylesheet:
      app.get('env') === 'production'
        ? '/dist/client.bundle.min.css'
        : '/dist/client.bundle.css',
    javascript:
      app.get('env') === 'production'
        ? '/dist/client.bundle.min.js'
        : '/dist/client.bundle.js',
  });
});

export default app;
