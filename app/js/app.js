var app = angular.module('transientApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	
	$stateProvider.state('search', {
		url: '/',
		templateUrl: '/js/search/search.html'
	}).state('result', {
		templateUrl: '/js/appbase/appBase.html'
	}).state('result.results', {
		url: '/{location}',
		templateUrl: '/js/home/HomePage.html'
	}).state('result.category', {
		url: '/{location}/{category}',
		templateUrl: '/js/entertainment/Entertainment.html'
	}).state('result.store', {
		url: '/{location}/{category}/{store}',
		templateUrl: '/js/diner/jaysDiner.html'
	});
	
	}]);
