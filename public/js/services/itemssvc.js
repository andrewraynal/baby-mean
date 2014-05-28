angular.module('angularstoreApp')
	.factory('ItemsSvc', function($resource) {
		return $resource('api/collections/BoardInventory', {},
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
			