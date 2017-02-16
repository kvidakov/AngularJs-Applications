'use strict';

var angular = require('angular');

angular.module('flightListApp').controller('mainCtrl', function ($scope, dataService)
{
  dataService.getFlights(function (response)
  {
    var flights = response.data.flights;
    $scope.flights = flights;
  });

});

module.exports = mainCtrl;
