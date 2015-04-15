var app = angular.module('transientApp', ['ngRoute']);

app.config(['$uiProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/js/search/search.html'
	}

)}]);
