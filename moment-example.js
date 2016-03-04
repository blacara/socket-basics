var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1457133007667;
var timestampMoment = moment.utc(now.valueOf());

console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format("dddd, MMMM Do YYYY - h:mm a"));