'use strict';

angular
  .module('padelApp.services')
  .factory('RegisterService', RegisterService);

function RegisterService($http, APP, $q) {
  var service = {
    register: register,
    comprobateUserName: comprobateUserName,
    comprobateEmail: comprobateEmail
  };

  return service;

  function register(user) {
    return $http({
      method: 'GET',
      url: APP.apiUrl + 'usuario.php',
      params: user
    }).then(function successCallback(response) {
      if (response.data.errorMessage.match('no error')) {
        return response.data;
      }else{
        return $q.reject(response.data);
      }
    });
  }

  function comprobateUserName(username){
    return $http({
      method: 'GET',
      url: APP.apiUrl + 'username.php?username=' + username
    }).then(function successCallback(response) {
        if (response.data.errorMessage === 'no error') {
          return true;
        }else{
          return false;
        }
      });
  }

  function comprobateEmail(email){
    return $http({
      method: 'GET',
      url: APP.apiUrl + 'email.php?email=' + email
    }).then(function successCallback(response) {
      if (response.data.errorMessage === 'no error') {
        return true;
      }else{
        return false;
      }
      });
  }
}
