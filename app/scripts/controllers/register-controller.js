'use strict';

angular
  .module('padelApp')
  .controller('RegisterController', RegisterController);

function RegisterController() {
  var registerVm = this;
  registerVm.submit = submit;
  registerVm.user = {};

  function submit(){
    if (!registerVm.registerForm.$invalid) {
      //TODO send data
    }
  }
}
