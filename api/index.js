/* eslint-disable arrow-parens */
/* eslint-disable no-console */
require('dotenv').config();

process.env.ABT_NODE_LOG_DIR = process.env.BLOCKLET_LOG_DIR;

const { server } = require('./functions/app');
const { start: startDNS } = require('./libs/dns');

const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && process.env.ABT_NODE) {
  process.env.BLOCKLET_PORT = 3030;
}

const port = parseInt(process.env.BLOCKLET_PORT, 10) || 3030;

startDNS();

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> ip-echo-dns ready on ${port}`);
});
