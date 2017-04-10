# ip-to-gps
An IP to GPS coordinates package

### Overview
A simple way to get [GPS information](#response) from IP address.

### Install
`npm install -S ip-to-gps`

### Usage
```
const {getGPS} = require('ip-to-gps');

const IP = '216.58.194.78';

getGPS(IP, (err, response) => {
  if (err) throw err;
  
  console.log(response);
  
  /*** response
  
  { as: 'AS15169 Google Inc.',
  city: 'Mountain View',
  country: 'United States',
  countryCode: 'US',
  isp: 'Google',
  lat: 37.4192,
  lon: -122.0574,
  org: 'Google',
  query: '216.58.194.78',
  region: 'CA',
  regionName: 'California',
  status: 'success',
  timezone: 'America/Los_Angeles',
  zip: '94043' }

  ****/
});
```

### Response
```
{ 
  as,
  city,
  country,
  countryCode,
  isp,
  lat,
  lon,
  org,
  query,
  region,
  regionName,
  status,
  timezone,
  zip
}
```
