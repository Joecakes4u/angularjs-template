
// define Router
angular.module('app').config(function($routeProvider) {
    _configRoutes();

    function _configRoutes() {
        $routeProvider
        .when("/login", {
            templateUrl: "src/features/login/login.html",
            controller: "LoginController as ctrl"
        })
        .when("/binding-example", {
            templateUrl: "src/features/binding-example/binding-example.html"
        })
        .when("/", {
            templateUrl: "src/features/home/home.html"
        })
        .otherwise({
            templateUrl: "src/features/home/home.html"
        });
    }
});