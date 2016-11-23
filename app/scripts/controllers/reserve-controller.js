'use strict';

angular
  .module('padelApp.controllers')
  .controller('ReserveController', ReserveController);

function ReserveController(ReserveService) {
  var reserveVm = this;
  reserveVm.submit = submit;

  function submit(){
    if (!reserveVm.reserveForm.$invalid) {
      var date = new Date(reserveVm.reserve.date).getTime();
      ReserveService.getDisponibility(date).then(function(response){
        reserveVm.disponibilities = response;
      });
    }
  }
}
