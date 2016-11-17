'use strict';

angular
  .module('padelApp')
  .factory('LoginService', LoginService);

function LoginService($http, $q) {
  var service = {
    login: login
  };

  return service;

  function login(user) {
    return $http({
      method: 'GET',
      url: 'http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php?id=' + user.id + '&password=' + user.password
    }).then(function successCallback(response) {
        if (response.data.token) {
          return response.data;
        }else{
          return $q.reject(response.data);
        }
      });
  }
}
