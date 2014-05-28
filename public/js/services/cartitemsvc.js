angular.module('angularstoreApp')
	.factory('CartItemSvc', function($resource) {
		return $resource('api/collections/BoardShop/:id',
			{
				id: '@_id'
			},
			{
				showCartItem: { method: 'GET'		},
				editCartItem: { method: 'PUT' 	},
				deleteCartItem: { method: 'DELETE'	}
			});
	});
	