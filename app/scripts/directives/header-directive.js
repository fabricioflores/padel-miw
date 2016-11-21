'use strict';

angular
  .module('padelApp.directives')
  .directive('header', header);

function header() {
  var directive = {
    restrict: 'EA',
    templateUrl: 'views/header.html',
    controller: headerController,
    controllerAs: 'headerVm',
    bindToController: true
  };

  return directive;

  function headerController($localStorage, $state, Alertify, $scope){
    var headerVm = this; //jshint ignore:line
    headerVm.hasSession = !!$localStorage.token;
    headerVm.logout = logout;

    function logout(){
      delete $localStorage.token;
      $state.go('home', {}, {reload: true}).then(function(){
        updateHasSession();
        Alertify.success('Gracias!');
      });
    }

    $scope.$on('login', function(){
      updateHasSession();
    });

    function updateHasSession(){
      headerVm.hasSession = !!$localStorage.token;
    }
  }

}
