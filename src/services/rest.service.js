import { app } from "../app.module"
import { apiUrl } from "../environment/environment" 

app.factory('RestService', function($http) {
    let service = {};
    service.login = function(username, password) {
        const url = apiUrl + 'user'
        let response = '';
        if (username !== null && password=== 'password') {
            response = { success: true };
        } else {
            response = { success: false, message: 'Username or password is incorrect' };
        }
        return response;
    };
  
    service.checkApi = function(){
        return $http.get(apiUrl + 'greeting')
    };
  
    return service;
  
  });