angular.module('angularstoreApp')
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
	});