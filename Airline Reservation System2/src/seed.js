'use strict';

var Flight = require('./models/flight.js');

var flights = [
  'Let 1',
  'Let 2',
  'Let 3'
];

flights.forEach(function (flight, index)
{
  Flight.find({'name': flight}, function (err, flights)
  {
    if (!err && !flights.length)
    {
      flight.create({name: flight});
    }
  });
});
