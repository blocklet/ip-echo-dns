/* eslint-disable operator-linebreak */
module.exports = {
  appId:
    process.env.BLOCKLET_APP_ID ||
    process.env.REACT_APP_APP_ID ||
    process.env.GATSBY_APP_ID ||
    process.env.APP_ID ||
    process.env.appId ||
    '',
  appName:
    process.env.REACT_APP_APP_NAME ||
    process.env.GATSBY_APP_NAME ||
    process.env.APP_NAME ||
    process.env.appName ||
    'IP Echo DNS',
  appDescription:
    process.env.REACT_APP_APP_DESCRIPTION ||
    process.env.GATSBY_APP_DESCRIPTION ||
    process.env.APP_DESCRIPTION ||
    process.env.appDescription ||
    'A simple DNS server',
  baseUrl:
    process.env.REACT_APP_BASE_URL || process.env.GATSBY_BASE_URL || process.env.BASE_URL || process.env.baseUrl || '',
  apiPrefix:
    process.env.REACT_APP_API_PREFIX ||
    process.env.GATSBY_API_PREFIX ||
    process.env.NF_API_PREFIX ||
    process.env.API_PREFIX ||
    process.env.apiPrefix ||
    '',
  ipRegexString: process.env.IP_REGEX,
  exampleDomain: process.env.EXAMPLE_DOMAIN,
  dnsService: process.env.DNS_SERVICE,
};
