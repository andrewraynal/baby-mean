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
		$scope.deleteItem = function() {
			ItemSvc.delete({ id: $routeParams.id });
			$location.path('/inventory');
		};
		$scope.editItem = function() {
			ItemSvc.editItem($scope.item);
			$location.path('/inventory');
		};
	})
	.controller('CartItemsCtrl', function ($scope, $location, $routeParams, CartItemsSvc) {
    $scope.addCartItem = function(item) {
      $location.path('/shop');
    };
    $scope.newCartItem = function(item) {
      CartItemsSvc.create(item);
      $location.path('/cart');
    };
    $scope.items = CartItemsSvc.query();
  })

  .controller('CartItemCtrl', function($scope, $location, $routeParams, CartItemSvc) {
    $scope.item = CartItemSvc.showCartItem({ id: $routeParams.id });
    $scope.deleteCartItem = function() { 
      CartItemSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.editQty = function() {
      CartItemSvc.editQty($scope.item);
      $location.path('/cart');
    };
  });