import { app } from "./app.module";

// define Router
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/login", {
        templateUrl: "src/features/login/login.template.html"
    })
    .when("/profile", {
        templateUrl: "src/features/profile/profile.template.html"
    })
    .when("/binding-example", {
        templateUrl: "src/features/binding-example/binding-example.template.html"
    })
    .when("/", {
        templateUrl: "src/features/home/home.template.html",
        controller: "homeController"
    })
    .otherwise({
        templateUrl: "src/features/home/home.template.html"
    });

    $locationProvider
    .hashPrefix('!');
});