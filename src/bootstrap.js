// define Module "app"
// A Module DEFINES Angularjs applications
var app = angular.module('app', ["ngRoute"]);

// define Controller "appController"
// A Controller CONTROLS Angular
app.controller('appController', function($scope) {
});

// define Router
app.config(function($routeProvider) {
    $routeProvider
    .when("/binding-example", {
        templateUrl: "src/features/binding-example/binding-example.html"
    })
    .when("/", {
        templateUrl: "src/features/home/home.html"
    })
    .otherwise({
        templateUrl: "src/features/home/home.html"
    });
});