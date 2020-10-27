/* eslint-disable arrow-parens */
/* eslint-disable no-console */
require('dotenv').config();

process.env.ABT_NODE_LOG_DIR = process.env.BLOCKLET_LOG_DIR;

const env = require('./libs/env');
const { server } = require('./functions/app');
const { start: startDNS } = require('./libs/dns');

const port = parseInt(process.env.BLOCKLET_PORT, 10) || 3000;

startDNS();

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> ip-echo-dns ready on ${env.baseUrl}`);
});
