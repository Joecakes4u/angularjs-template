import { app } from "../app.module"

app.factory('RestService', function($http) {
    let service = {};
    const urlBase = '/api/v1';
    let response = '';
    service.login = function(username, password) {
        if (username !== null && password=== 'password') {
            response = { success: true };
        } else {
            response = { success: false, message: 'Username or password is incorrect' };
        }
        return response;
    };
  
    service.getUser = function(id){
        return $http.get(urlBase + '/user/' + id);
    };
  
    return service;
  
  });