angular.module('angularstoreApp')
	.factory('CartItemsSvc', function($resource) {
		return $resource('api/collections/BoardShop', {},
			{
				query: {
						method: 'GET',
						isArray: true
				},
				create: {
						method: 'POST'
				}
			});
	});
			