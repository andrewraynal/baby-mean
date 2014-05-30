angular.module('angularstoreApp')
	.factory('ProductItemsSvc', function($resource) {
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