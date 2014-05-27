angular.module('angularstoreApp')
	.factory('ItemSvc', function($resource) {
		return $resource('mongodb://FrankZappa:andrewandrew44@ds053218.mongolab.com:53218/andrewr/:id',
			{
				id: '@_id'
			},
			{
				showItem: { method: 'GET'		},
				editItem: { method: 'PUT' 	},
				deleteItem: { method: 'DELETE'	}
			});
	});
			