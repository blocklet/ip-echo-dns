/* eslint-disable no-console */
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const serverless = require('serverless-http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');
const serveStatic = require('serve-static');

const sessionRoute = require('../routes/session');
const healthRoute = require('../routes/health');

const isProduction = process.env.NODE_ENV === 'production' || !!process.env.ABT_NODE;

// Create and config express application
const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
  morgan((tokens, req, res) => {
    const log = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');

    if (isProduction) {
      // Log only in AWS context to get back function logs
      console.log(log);
    }

    return log;
  })
);

const router = express.Router();

sessionRoute.init(router);
healthRoute.init(router);

if (isProduction) {
  const staticDir = '../../';

  app.use(compression());
  app.use(router);
  if (process.env.BLOCKLET_DID) {
    app.use(`/${process.env.BLOCKLET_DID}`, router);
  }

  const staticDirNew = path.resolve(__dirname, staticDir, 'build');

  const staticServe = express.static(staticDirNew, {
    maxAge: '30d',
    extensions: ['html', 'htm'],
    index: ['index.html', 'index.htm'],
    setHeaders: (res, file) => {
      if (serveStatic.mime.lookup(file) === 'text/html') {
        res.setHeader('Cache-Control', 'public, max-age=0');
      }
    },
  });

  app.use(staticServe);
  if (process.env.BLOCKLET_DID) {
    app.use(`/${process.env.BLOCKLET_DID}`, staticServe);
  }
  app.use(fallback('index.html', { root: staticDirNew }));
  app.use((req, res) => {
    res.status(404).send('404 NOT FOUND');
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
} else {
  app.use(router);
}

// Make it serverless
exports.handler = serverless(app);
exports.server = app;
