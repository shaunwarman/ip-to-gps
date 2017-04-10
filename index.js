const Request = require('request');

const API_URL = 'ip-api.com';

module.exports = {
  getGPS: (ip, callback) => {
    const options = {
      protocol: 'http',
      host: API_URL,
      type: 'json',
      ip
    };

    const url = createURL(options);

    Request.get(url, (err, response, body) => {
      if (err) return callback(err);

      let json;
      try {
        json = JSON.parse(body);
      }
      catch (e) {
        return callback(e);
      }

      callback(null, json);
    });
  }
}

function createURL(options) {
  const {protocol, host, type, ip} = options;

  return `${protocol}://${host}/${type}/${ip}`;
}
