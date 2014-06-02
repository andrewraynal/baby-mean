'use strict';

angular.module('angularstoreApp')
    .controller('CarouselCtrl', function ($scope){
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    
    $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
     slides.push({
      image: 'http://fillmurray.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Bill', 'Bill', 'Bills', 'of Bills'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    	}
  	}
  });