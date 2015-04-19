var app = angular.module('transientApp', ['ui.router', 'uiRouterStyles']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	
	$stateProvider.state('search', {
		url: '/',
		templateUrl: '/js/search/search.html',
		data: { 
			css: ['/css/splashPageStyle.css', '/css/cover.css']
		}
	}).state('result', {	
		templateUrl: '/js/appbase/appBase.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.results', {
		url: '/{location}',
		templateUrl: '/js/home/HomePage.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.category', {
		url: '/{location}/{category}',
		templateUrl: '/js/entertainment/Entertainment.html',
		data: { 
			css: ['/css/entertainment.css']
		}
	}).state('result.store', {
		url: '/{location}/{category}/{store}',
		templateUrl: '/js/diner/JaysDiner.html',
		data: { 
			css: ['/css/storepage.css']
		}
	});
	
	}]);