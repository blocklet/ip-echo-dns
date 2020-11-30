const dns = require('dns2');
const { ipRegexString } = require('./env');
const { DNS_PORT } = require('./constant');

const { Packet } = dns;

const ipReg = new RegExp(ipRegexString);

const parseIP = (name = '') => {
  if (ipReg.test(name)) {
    const result = ipReg.exec(name);

    return result.slice(1, 5).join('.');
  }

  return '';
};

const server = dns.createServer((request, send) => {
  const response = Packet.createResponseFromRequest(request);
  const [question] = request.questions;
  const { name = '' } = question;

  console.log('query name', { name, ipReg });

  if (ipReg.test(name)) {
    response.answers.push({
      name,
      type: Packet.TYPE.A,
      class: Packet.CLASS.IN,
      ttl: 604800, // 7 weeks
      address: parseIP(name),
    });
  }

  send(response);
});

const start = () => {
  server.listen(DNS_PORT).then(() => {
    console.log(`DNS server started at port ${DNS_PORT} successfully`);
  });

  server.on('error', (err) => {
    console.log(`DNS server error:\n${err.stack}`);
    server.close();
  });
};

module.exports = { start, parseIP };
