'use strict';

var express = require('express');
var flight = require('../models/flight');
// var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/flights', function(req, res) {
  flight.find({}, function (err, flights)
  {
    if(err)
    {
      return res.status(500).json({message: err.message});
    }
    res.json({ flights: flights });
  });
});



router.put('/flights/:id', function (req, res)
{
  var id = req.params.id;
  var flight = req.body;
  if(flight && flight._id !== id)
  {
    return res.status(500).json({err: "IDs don't match!"});
  }
  flight.findByIdAndUpdate(id, flight, {new: true}, function (err, flight)
  {
    if (err)
    {
      return res.status(500).json({err: err.message});
    }
    res.json({'flight': flight, message: 'Flight selected'});
  });
});
// TODO: Add DELETE route to remove existing entries

module.exports = router;
