angular.module('angularstoreApp')
	.factory('ItemsSvc', function($resource) {
		return $resource('api/collections/BoardStore', {},
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
			