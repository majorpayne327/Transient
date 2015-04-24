var app = angular.module('transientApp')

app.controller('SearchController', function () {

	var self = this;
	
	self.search = function() {
		console.log("Button Click");	
	}
});