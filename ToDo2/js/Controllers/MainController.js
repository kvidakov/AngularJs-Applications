
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider)
{
   $routeProvider
       .when("/home",{
            templateUrl: "Templates/home.html",
            controller: "homeCtrl"
        })
       .when("/contact",{
           templateUrl: "Templates/contact.php",
           controller: "contactCtrl"
       })
       .otherwise({
           redirectTo: "/home"
   })
});