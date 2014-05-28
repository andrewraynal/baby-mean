angular.module('costNg.directives')
	.directive('costDirective', function(){
		return{
			restrict:'E',
			scope: true,
			templateUrl: 'views/costdirect.html'
		}
	});	