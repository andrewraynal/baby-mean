'use strict';

angular.module('angularstoreApp')
.controller('MainCtrl', function ($scope) {
    $scope.status = {
    isopen: false
  };
    $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
     $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
  ];
})
 

  // create store front
  // select products to add
  // checkout page
  // when purchase clicked, remove from inventory and cart
  // when user idle, remove products from cars after 5 mins
  // when 