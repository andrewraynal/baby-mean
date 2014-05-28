angular.module('qtyNg.directives')
	.directive('qtyDirective', function(){
		return{
			restrict:'E',
			scope: true,
			templateUrl: 'views/qtydirect.html'
		}
	});	