'use strict';

angular
  .module('angularstoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/create-item.html',
        controller: 'ItemsCtrl'
      })
      .when('/inventory/:id/edit', {
        templateUrl: 'views/update-item.html',
        controller: 'ItemCtrl'
      })
        .when('/inventory/:id', {
        templateUrl: 'views/item-details.html',
        controller: 'ItemCtrl'
      })
        .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'ItemsCtrl'
      })
        .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ProductItemsCtrl'
      })
        .when('newproductitem', {                    
        templateUrl: 'views/create-productitem.html',
        controller: 'ProductItemsCtrl'
      })
      .when('/shop/:id', {
        templateUrl: 'views/productitem-details.html',
        controller: 'ProductItemCtrl'
      })
      .when('/shop/:id/edit', {
        templateUrl: 'views/update-productitem.html',
        controller: 'ProductItemCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartItemsCtrl'
      })
      .when('/cart/:id/', {
        templateUrl: 'views/update-cart.html',
        controller: 'CartItemCtrl'
      })
        .otherwise({
        redirectTo: '/'
  });
});
 angular.module('angularstoreApp.directives', []);

