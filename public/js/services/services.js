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
	})
	.factory('ItemSvc', function($resource) {
		return $resource('api/collections/BoardInventory/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'		},
				edit: { method: 'PUT' 	},
				delete: { method: 'DELETE'	}
			});
	})
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
	})
	.factory('ProductItemSvc', function($resource) {
		return $resource('api/collections/BoardShop/:id',
	 		{
	 			id: '@_id'
	 		},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
	 			delete: { method: 'DELETE'}
	 		});	
	});