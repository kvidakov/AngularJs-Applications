'use strict';

function DataService($http, $q)
{
  this.getFlights = function (cb)
  {
    $http.get('/api/flights').then(cb);
  };
}

module.exports = DataService;
