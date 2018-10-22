import { app } from "../../app.module";

// define Controller "loginController"
app.controller('homeController', function($scope, $location, RestService) {
    
    // Login, calls auth service
    $scope.test = function() {
        const response = RestService.checkApi()
        .then(function successCallback(res) {
            console.log(res);
            if (res) {
                $location.path('/profile').replace();
            } else {
                console.log('asdfasd');
            }
        });
    }
});