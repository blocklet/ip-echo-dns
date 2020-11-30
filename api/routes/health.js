const { lookup } = require('dns');
const { promisify } = require('util');

const { parseIP } = require('../libs/dns');
const { exampleDomain } = require('../libs/env');

const lookupSync = promisify(lookup);

module.exports = {
  init(app) {
    app.get('/api/health', async (req, res) => {
      if (!exampleDomain) {
        console.error('invalid example domain');
        return res.status(500).send('internal server error');
      }

      try {
        const parsedIP = parseIP(exampleDomain);
        const result = await lookupSync(exampleDomain);
        if (!result || result.address !== parsedIP) {
          console.error(`resolve error, lookup address: ${JSON.stringify(result)}, parsed ip: ${parsedIP}`);
          return res.status(500).send('internal server error');
        }

        return res.send('ok');
      } catch (error) {
        console.error('lookup dns error:', error);
        return res.status(500).send('internal server error');
      }
    });
  },
};
