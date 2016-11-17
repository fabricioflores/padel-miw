'use strict';

angular
  .module('padelApp')
  .controller('LoginController', LoginController);

function LoginController(LoginService, Alertify, $state) {
  var loginVm = this;
  loginVm.submit = submit;
  loginVm.login = {};

  function submit(){
    if (!loginVm.loginForm.$invalid) {
      LoginService.login(loginVm.login).then(function(response){
        //TODO save token locally
        $state.go('home').then(function(){
          Alertify.success('Has iniciado sesión');
        });
      }, function(error){
        Alertify.error(error.errorMessage);
      });
    }
  }
}
