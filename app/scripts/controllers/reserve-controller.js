'use strict';

angular
  .module('padelApp.controllers')
  .controller('ReserveController', ReserveController);

function ReserveController() {
  var reserveVm = this;
  reserveVm.submit = submit;
  reserveVm.reserve = {};

  function submit(){
    if (!reserveVm.reserveForm.$invalid) {
      //TODO send data
    }
  }
}
