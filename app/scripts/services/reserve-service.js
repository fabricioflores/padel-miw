'use strict';

angular
  .module('padelApp.services')
  .factory('ReserveService', ReserveService);

function ReserveService($http, APP) {
  var service = {
    getDisponibility: getDisponibility
  };

  return service;

  function getDisponibility(date) {
    return $http({
      method: 'GET',
      url: APP.apiUrl + 'disponibilidad.php?day=' + date,
    }).then(function successCallback(response) {
      return response.data;
    });
  }
}
