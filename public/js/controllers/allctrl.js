'use strict';

angular.module('angularstoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.status = {
    isopen: false
    };
  })
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
    $scope.productitem = ProductItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProductItemSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
    };
    $scope.edit = function() {
      ProductItemSvc.edit($scope.productitem);
    };
  })
    .controller('CarouselCtrl', function ($scope){
      $scope.myInterval = 5000;
      $scope.slides = [];
      $scope.addSlide = function(slide) {
        slides.push({
          image: '../images/',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 3] + ' ' +
              ['Boards', 'Sun', 'Paddling', 'of Old Boards'][slides.length % 3]
        });
      };  
      for (var i=0; i<3; i++) {
        $scope.addSlide();
      };
    })