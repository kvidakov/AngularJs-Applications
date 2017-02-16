'use strict';

var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
  name: String
});

var model = mongoose.model('Flight', FlightSchema);

module.exports = model;
