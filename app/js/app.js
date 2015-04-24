var app = angular.module('transientApp', ['ui.bootstrap', 'ui.router', 'uiRouterStyles']);

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
	}).state('result.user', {
		url: '/user',
		templateUrl: '/js/user/user.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.results', {
		url: '/{location}',
		templateUrl: '/js/home/HomePage.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.searchterms', {
		url: '/{location}/{result}',
		templateUrl: function($stateParams) {
			return '/js/' + $stateParams.result + '/' + $stateParams.result + '.html'			
		},
		data: { 
			css: function($stateParams) {
				return '/css/' + $stateParams.result + '.css'	;		
			}
		}
	}).state('result.feed', {
		url: '/{location}/feed',
		templateUrl: '/js/feed/feed.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	});
	
	}]);