'use strict';

angular
  .module('padelApp.controllers')
  .controller('ReserveController', ReserveController);

function ReserveController(ReserveService, Alertify, $filter) {
  var reserveVm = this;
  reserveVm.submit = submit;
  reserveVm.select = select;

  function submit(){
    if (!reserveVm.reserveForm.$invalid) {
      var date = new Date(reserveVm.reserve.date).getTime();
      ReserveService.getDisponibility(date).then(function(response){
        reserveVm.disponibilities = response;
      });
    }
  }

  function select(index){
    Alertify.confirm('Estás seguro de reservar la cancha ' +
                    reserveVm.disponibilities[index].courtId + ' el día ' +
                    $filter('date')(reserveVm.disponibilities[index].date, 'medium') +
                    '?')
    .then(function () {
      Alertify.success('Gracias. Se enviará un correo de confirmación');
    }, function () {
      Alertify.log('No has reservado nada ;-)');
    });
  }
}
