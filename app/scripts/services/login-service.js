'use strict';

angular
  .module('padelApp.services')
  .factory('LoginService', LoginService);

function LoginService($http, $q, APP) {
  var service = {
    login: login
  };

  return service;

  function login(user) {
    return $http({
      method: 'GET',
      url: APP.apiUrl + '?id=' + user.id + '&password=' + user.password
    }).then(function successCallback(response) {
        if (response.data.token) {
          return response.data;
        }else{
          return $q.reject(response.data);
        }
      });
  }
}
