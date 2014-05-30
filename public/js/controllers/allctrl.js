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
	.controller('ProductItemsCtrl', function ($scope, $location, ProductItemsSvc) {
     $scope.createProductItem = function() {
      $location.path('/admin');
    };
    $scope.newProductItem = function(productitem) {
      ProductsSvc.create(productitem)
      $location.path('/shop');
    };
    $scope.productitems = ProductsSvc.query();
  })

  .controller('ProductItemCtrl', function($scope, $location, $routeParams, ProductItemSvc) {
    $scope.productitem = ProductItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProductItemSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
    };
    $scope.edit = function() {
      ProductItemSvc.edit($scope.productitem);
      $location.path('/shop');
    };
    $scope.toggle = function() {
      $scope.isVisible = !$scope.isVisible;
    };
      $scope.isVisible = false;
  })

  .controller('CartItemsCtrl', function ($scope, $location, $routeParams, CartItemsSvc) {
    $scope.addItem = function(productitem) {
      $location.path('/shop');
    };
    $scope.newItem = function(productitem) {
      CartItemsSvc.create(productitem);
      $location.path('/cart');
    };
    $scope.productitems = CartItemsSvc.query();
  })

  .controller('CartItemCtrl', function($scope, $location, $routeParams, CartItemSvc) {
    $scope.productitem = CartItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      CartItemSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.edit = function() {
      CartItemSvc.edit($scope.productitem);
      $location.path('/cart');
    };
  });
 