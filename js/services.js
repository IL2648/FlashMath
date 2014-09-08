'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('BusinessService', [function() {
		var sdo = {
			id: 0
		};
		return sdo;
	}]);