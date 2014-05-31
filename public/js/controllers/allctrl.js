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
			ItemSvc.editItem($scope.item);
			$location.path('/inventory');
		};
	})
	.controller('ProductItemsCtrl', function ($scope, $location, ProductItemsSvc) {
     $scope.createProductItem = function() {
      $location.path('/newproductitem');
    };
    $scope.newProductItem = function(productitem) {
      ProductItemSvc.create(productitem)
      $location.path('/shop');
      alert("It's in your cart.  Please continue.");
    };
    $scope.productitems = ProductItemsSvc.query();
  })

  .controller('ProductItemCtrl', function($scope, $location, $routeParams, ProductItemSvc) {
  //inside our angular module (angularAppStore), we're creating a controller function and 
  // passing in our "name" for controller ('ProductItemCtrl') --> we pass this in because 
  // we ultimately want to return the value of of our controller (ie. bind model and view)
  // we also pass in a function that itself passes in scope (binds view and controller), 
  // location (points to element in view) , routeParams (service-retrieves current params, here set to "id"),
  // and finally ProductItemSvc (service function linking view and controller with API)
    $scope.productitem = ProductItemSvc.show({ id: $routeParams.id });
// the productitem scope, (via ProductItemSvc) shows productitem with given id 
    $scope.delete = function() { 
      ProductItemSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
// the delete scope wants to delete so created function that 
// (via our svc) deletes productitem located at path /shop <-- created by config() our app
    };
    $scope.edit = function() {
      ProductItemSvc.edit($scope.productitem);
      $location.path('/shop/:id');
// the edit scope wants to edit so created a function that 
// (via our svc) "edits" at shop:id path
    };
    $scope.toggle = function() {
      $scope.isVisible = !$scope.isVisible;
//the toggle scope needs scopes of its own because 
// we need to "toggle" between two states
// the scope.toggle function sets two scopes one is visible
    };
      $scope.isVisible = false;
//and one that follows is not visible by setting the "isVisible" to false
  })

.controller('DropdownCtrl', function ($scope){
  
  $scope.dropper = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}    
  })




 //  .controller('CartItemsCtrl', function ($scope, $location, $routeParams, CartItemsSvc) {
 //    $scope.addItem = function(productitem) {
 //      $location.path('/shop');
 //    };
 //    $scope.newItem = function(productitem) {
 //      CartItemsSvc.create(productitem);
 //      $location.path('/cart');
 //    };
 //    $scope.productitems = CartItemsSvc.query();
 //  })

 //  .controller('CartItemCtrl', function($scope, $location, $routeParams, CartItemSvc) {
 //    $scope.productitem = CartItemSvc.show({ id: $routeParams.id });
 //    $scope.delete = function() { 
 //      CartItemSvc.delete({ id: $routeParams.id });
 //      $location.path('/cart');
 //    };
 //    $scope.edit = function() {
 //      CartItemSvc.edit($scope.productitem);
 //      $location.path('/cart');
 //    };
 //  });
 // 