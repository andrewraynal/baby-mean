'use strict';

angular.module('angularstoreApp',['ui.bootstrap'])
  .controller('DropdownCtrl', function($scope) {

  $scope.status = {
    isopen: false
  };
   $scope.statusinv = {
    isopen: false
  };

});
