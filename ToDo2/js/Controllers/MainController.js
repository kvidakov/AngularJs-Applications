
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
       .when("/login",{
           templateUrl: "Templates/login.html",
           controller: "loginCtrl"
       })
       .otherwise({
           redirectTo: "/login"
   })
});