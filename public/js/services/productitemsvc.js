angular.module('angularstoreApp')
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
	})