'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('userService', [function() {
		return {
			userId : 1
		};
	}]);
angular.module('myApp.services', []).factory('problem', function(){
	return {
		count: 1
	};
});
