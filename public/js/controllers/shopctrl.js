'use strict';

angular.module('angularstoreApp')
	.controller('ProductItemsCtrl', function ($scope, $location, ProductItemsSvc) {
     $scope.createProductItem = function() {
      $location.path('/newproduct');
    };
    $scope.newProductItem = function(productitem) {
      ProductItemSvc.create(productitem)
      $location.path('/shop');
      alert("It's in your cart.  Please continue.");
    };
    $scope.productitems = ProductItemsSvc.query();
  })
  .controller('ProductItemCtrl', function($scope, $location, $routeParams, ProductItemSvc) {
    $scope.productitem = ProductItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProductItemSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
    };
    $scope.edit = function() {
      ProductItemSvc.edit($scope.productitem);
    };
  });