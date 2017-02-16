var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider)
{
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state("home",{
    url: "/home",
    templateUrl: "Templates/flights.html",
    controller: "SearchFlightsCtrl"
  })
  .state("about",{
    url: "/about",
    templateUrl: "Templates/AboutUs.html",
    controller: "AboutUsCtrl"
  });
});
