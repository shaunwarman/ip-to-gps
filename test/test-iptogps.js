const Test = require('tape');

const {getGPS, getGPSList} = require('..');

Test('ip to gps', t => {

  t.test('get gps', t => {
    const IP = '216.58.194.78';

    const gps = getGPS(IP, (err, response) => {
      if (err) {
        t.fail(err, 'error getting gps');
        t.end();
      }
      else {
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
      }
    });
  });


  t.test('get gps lsit', t => {
    const IPs = ['216.58.194.78', '216.59.195.02', '145.32.95.166'];

    const gps = getGPSList(IPs, (err, response) => {
      if (err) {
        t.fail(err, 'error getting gps list');
        t.end();
      }
      else {
        t.ok(response, 'gps response');
        t.equals(response.length, 3);
        t.equals(response[0].query, '216.58.194.78');
        t.equals(response[0].as, 'AS15169 Google Inc.');

        t.equals(response[1].query, '216.59.195.2');
        t.equals(response[1].as, 'AS35985 One Ring Networks, Inc.');

        t.equals(response[2].query, '145.32.95.166');
        t.equals(response[2].as, 'AS702 MCI Communications Services, Inc. d/b/a Verizon Business');

        t.end();
      }
    });
  });
});