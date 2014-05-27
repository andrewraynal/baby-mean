angular.module('angularstoreApp')
	.factory('ItemsSvc', function($resource) {
		return $resource('mongodb://FrankZappa:andrewandrew44@ds053218.mongolab.com:53218/andrewr', {},
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
		