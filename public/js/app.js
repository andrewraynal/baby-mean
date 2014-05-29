'use strict';

angular
  .module('angularstoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'costNg.directives'
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
        .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartItemsCtrl'
      })
        .when('/cart/:id', {
        templateUrl: 'views/cart-detail.html',
        controller: 'CartItemCtrl'
      })
        .when('/cart/:id/edit', {
        templateUrl: 'views/cart-edit.html',
        controller: 'CartItemCtrl'
      })  
        .otherwise({
        redirectTo: '/'
  });
});

