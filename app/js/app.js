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
		controller: "AppBaseController as appCtrl",
		url: '/{loc}',
		resolve: { 
						pageTitle: function($stateParams){
							return $stateParams.loc;								
						}
		},		
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.user', {
		url: 'user/',
		templateUrl: '/js/user/user.html',
		data: { 
			css: ['/css/user.css']
		}
	}).state('result.feed', {
		url: '/feed/',
		templateUrl: '/js/feed/feed.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.emergency', {
		url: '/emergency/',
		templateUrl: '/js/emergency/emergency.html',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.results', {
		templateUrl: '/js/home/HomePage.html',
		controller: "HomeController as homeCtrl",
		url: '/',
		data: { 
			css: ['/css/HomePageStyle.css']
		}
	}).state('result.searchterms', {
		url: '/{result}',
		templateUrl: function($stateParams) {
			return '/js/' + $stateParams.result.replace("[^A-Za-z0-9]").toLowerCase() + '/' + $stateParams.result.replace("[^A-Za-z0-9]", "").toLowerCase() + '.html'			
		},
		data: { 
			css: function($stateParams) {
				return '/css/' + $stateParams.result + '.css'	;		
			}
		}
	});
	
	}]);