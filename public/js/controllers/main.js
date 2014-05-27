'use strict';

angular.module('angularstoreApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  .controller('ItemsCtrl', function ($scope, $location, ItemsSvc) {
    
    $scope.createItem = function() {
       $location.path('/new');
    };
    $scope.newItem = function(item) {
      ItemsSvc.create(item);
      $location.path('/inventory');
    };
    $scope.items = ItemsSvc.query();
  })
  .controller('ItemCtrl', function ($scope, $location, $routeParams, ItemSvc) {
    $scope.item = ItemSvc.showItem({ id: $routeParams.id });
    $scope.deleteItem = function() {
      ItemSvc.delete({ id: $routeParams.id });
      $location.path('/inventory');
    };
    $scope.editItem = function() {
      ItemSvc.editItem($scope.item);
      $location.path('/inventory');
    };
  });