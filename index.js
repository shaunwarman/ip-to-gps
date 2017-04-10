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
  },

  getGPSList: (ipList, callback) => {
    let promiseArr = [];

    ipList.forEach((ip) => {
      const url = createURL({
        protocol: 'http',
        host: API_URL,
        type: 'json',
        ip
      });

      promiseArr.push(new Promise((resolve, reject) => {
        Request.get(url, (err, response, body) => {
          if (err) reject(err);
          let json;
          try {
            json = JSON.parse(body);
          }
          catch (e) {
            reject(err);
          }
          resolve(json);
        });
      }))

    });

    Promise.all(promiseArr).then(values => {
      callback(null, values);
    }, reason => {
      callback(reason);
    });
  }
}

function createURL(options) {
  const {protocol, host, type, ip} = options;

  return `${protocol}://${host}/${type}/${ip}`;
}
