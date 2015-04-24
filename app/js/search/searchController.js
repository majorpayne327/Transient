var app = angular.module('transientApp');

app.controller('SearchController', function ($location) {

	var self = this;
	
	self.searchTerm = "";
	
	self.search = function() {
		$location.path('/' + self.searchTerm);
	}
});