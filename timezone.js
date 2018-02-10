const moment = require('moment-timezone');

const format = '**h:mma**, Do MM YYYY';
const defaultTimezone = 'America/Chicago';
moment.tz.setDefault(defaultTimezone);

const toTimezone = (datetime, zone) => {
  try {
    return `${moment(datetime).tz(zone).format(format)} **${zone}**`;
  } catch (e) {
    return `Sorry, can't understand the date: ${e.message}`;
  }
}

// FIXME move to tests
// const testDate = '2018-02-12 16:00';
// console.log(toTimezone(testDate, defaultTimezone));
// console.log(toTimezone(testDate, 'America/Toronto'));
// console.log(toTimezone(testDate, 'Europe/Sofia'));

// const timezones = [
//   'America/Chicago',
//   'America/Toronto',
//   'Europe/London',
//   'Europe/Sofia',
// ];
// const results = timezones.map(t => toTimezone(testDate, t));
// console.log(results.join("\n"));

exports.default = toTimezone;