'use strict';

angular
  .module('padelApp')
  .controller('LoginController', LoginController);

function LoginController(LoginService) {
  var loginVm = this;
  loginVm.submit = submit;
  loginVm.login = {};

  function submit(){
    if (!loginVm.loginForm.$invalid) {
      LoginService.login(loginVm.login).then(function(response){
        //TODO manage success
      }, function(error){
        //TODO manage error
      });
    }
  }
}
