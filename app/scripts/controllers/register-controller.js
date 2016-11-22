'use strict';

angular
  .module('padelApp.controllers')
  .controller('RegisterController', RegisterController);

function RegisterController(RegisterService, $state, Alertify) {
  var registerVm = this;
  registerVm.submit = submit;
  registerVm.comprobateUserName = comprobateUserName;
  registerVm.comprobateEmail = comprobateEmail;

  function comprobateUserName(){
    RegisterService.comprobateUserName(registerVm.user.username).then(function(response){
        registerVm.registerForm.name.$error.existing = !response;
        registerVm.registerForm.name.$invalid = !response || !registerVm.user.username;
    });
  }

  function comprobateEmail(){
    RegisterService.comprobateEmail(registerVm.user.email).then(function(response){
        registerVm.registerForm.email.$error.existing = !response;
        registerVm.registerForm.email.$invalid = !response || !registerVm.user.email;
    });
  }

  function submit(){
    if (!registerVm.registerForm.$invalid) {
      var userToBackend = {
        username: registerVm.user.username,
        password: registerVm.user.password,
        email: registerVm.user.email,
        birthDate: new Date(registerVm.user.date).getTime()
      };
      console.log(userToBackend);
      RegisterService.register(userToBackend).then(function(response){
        $state.go('login').then(function(){
          Alertify.success(response.errorMessage);
        });
      }, function(error){
        Alertify.error(error.errorMessage);
      });
    }
  }
}
