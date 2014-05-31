'use strict';

angular.module('angularstoreApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

.controller('DropdownCtrl',function ($scope){
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
  });
})
 

  // create store front
  // select products to add
  // checkout page
  // when purchase clicked, remove from inventory and cart
  // when user idle, remove products from cars after 5 mins
  // when 