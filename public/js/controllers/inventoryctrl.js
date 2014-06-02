'use strict';

angular.module('angularstoreApp')
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
		$scope.delete = function() {
			ItemSvc.delete({ id: $routeParams.id });
			$location.path('/inventory');
		};
		$scope.edit = function() {
			ItemSvc.edit($scope.item);
			$location.path('/inventory');
		};
	});