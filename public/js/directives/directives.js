angular.module('costNg.directives')
	.directive('costDirective', function(){
		return{
			restrict:'E',
			scope: true,
			templateUrl: 'views/costdirect.html',
			link: function(scope, element, attrs) {
				 	$scope.item = function(cartItems){
				 		$element.totalCost = function(cartItems) {
        				var totalCost = 0;
        				cartItems.forEach($scope.item, function(item) {
            			totalCost += item.qty * item.price;
        		})
			}
		}
	}	
});	