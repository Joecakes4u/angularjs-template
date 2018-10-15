// define Router
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl: "src/features/login/login.template.html"
    })
    .when("/binding-example", {
        templateUrl: "src/features/binding-example/binding-example.template.html"
    })
    .when("/", {
        templateUrl: "src/features/home/home.template.html"
    })
    .otherwise({
        templateUrl: "src/features/home/home.template.html"
    });
});