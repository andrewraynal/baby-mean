'use strict';

angular.module('angularstoreApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
 

  // create store front
  // select products to add
  // checkout page
  // when purchase clicked, remove from inventory and cart
  // when user idle, remove products from cars after 5 mins
  // when 