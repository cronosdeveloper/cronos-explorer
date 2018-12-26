
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://explorer.cronoscoin.online',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'crsx'
  },
  'db': {
    'host': 'mongodb',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': 'daemon',
    'port': '31302',
    'user': 'cronos',
    'pass': 'Rj61VsFlvvtZKp6PyuZE',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
