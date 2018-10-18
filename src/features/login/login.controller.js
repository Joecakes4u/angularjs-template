import { app } from "../../app.module";

// define Controller "loginController"
app.controller('loginController', function($scope, $location, RestService) {
    
    // Login, calls auth service
    $scope.login = function() {
        $scope.dataLoading = true;
        const response = RestService.login($scope.username, $scope.password);
        if (response.success) {
            $location.path('/profile').replace();
        } else {
            $scope.dataLoading = false;
            console.log('asdfasd');
        }
    };
});