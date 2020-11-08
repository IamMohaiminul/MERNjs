import '@babel/polyfill';
import { addPath } from 'app-module-path';
import 'app-module-path/register';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import favicon from 'serve-favicon';
import api from './routes';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger(process.env.MORGAN_FMT));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
addPath(__dirname);

/* use RESTful APIs listing. */
app.use('/api', api);

/* use for admin app. */
app.get(['/admin', '/admin/*'], (req, res) => {
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
app.get('*', (req, res) => {
  res.render('index', {
    title: 'MERNjs',
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

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (req.app.get('env') === 'production') {
    res.json({
      message: err.message,
      error: {},
    });
  } else {
    res.json({
      message: err.message,
      error: err,
    });
  }
});

export default app;
