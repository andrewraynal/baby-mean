angular.module('angularstoreApp')
	.factory('ItemSvc', function($resource) {
		return $resource('api/collections/BoardInventory/:id',
			{
				id: '@_id'
			},
			{
				showItem: { method: 'GET'		},
				editItem: { method: 'PUT' 	},
				deleteItem: { method: 'DELETE'	}
			});
	});