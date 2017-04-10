const Test = require('tape');

const {getGPS} = require('..');

Test('ip to gps', t => {

  t.test('get gps', t => {
    const IP = '216.58.194.78';

    const gps = getGPS(IP, (err, response) => {
      if (err) {
        t.fail(err, 'error getting gps');
        t.end();
      }

      t.ok(response, 'gps response');

      t.equals(response.as, 'AS15169 Google Inc.');
      t.equals(response.city, 'Mountain View');
      t.equals(response.country, 'United States');
      t.equals(response.countryCode, 'US');
      t.equals(response.isp, 'Google');
      t.equals(response.lat, 37.4192);
      t.equals(response.lon, -122.0574);
      t.equals(response.org, 'Google');
      t.equals(response.query, '216.58.194.78');
      t.equals(response.region, 'CA');
      t.equals(response.regionName, 'California');
      t.equals(response.status, 'success');
      t.equals(response.timezone, 'America/Los_Angeles');
      t.equals(response.zip, '94043');

      t.end();
    });
  });

});
