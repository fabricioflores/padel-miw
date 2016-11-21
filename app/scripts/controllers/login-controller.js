'use strict';

angular
  .module('padelApp.controllers')
  .controller('LoginController', LoginController);

function LoginController(LoginService, Alertify, $state, $localStorage, $rootScope) {
  var loginVm = this;
  loginVm.submit = submit;
  loginVm.login = {};

  function submit(){
    if (!loginVm.loginForm.$invalid) {
      LoginService.login(loginVm.login).then(function(response){
        $localStorage.token = response.token;
        $rootScope.$broadcast('login');
        $state.go('home').then(function(){
          Alertify.success('Has iniciado sesión');
        });
      }, function(error){
        Alertify.error(error.errorMessage);
      });
    }
  }
}
