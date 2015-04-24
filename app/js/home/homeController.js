var app = angular.module('transientApp');

app.controller('HomeController', function ($location, $scope, pageTitle) {
	var self = this;
	
	$scope.$parent.pageTitle = pageTitle;
	
	var titles = [
		'Lovin\' Cup',
		'Lazer Base',
		'Lilac Festival'
	];
	
	var imgs = [
		'/images/locationPics/lovinCup.jpg',
		'/images/locationPics/lazer_base.png',
		'/images/locationPics/lilacFestival.jpg'	
	];
	
	var descrs = [
		'Come and get drinks, watch live performances, and participate in our trivia nights!',
		'Lazer tag for the whole family! Come in for our "2-for-1" rounds on Thursday nights!',
		'Live music and festivities, fun for the whole family'	
	]
	
	self.init = function () {
		self.slides = [];
		
		for(i=0; i < imgs.length; i++){
			slide = {
				title: titles[i],
				image: imgs[i],
				descr: descrs[i]		
			}
			
			self.slides.push(slide);
			
		}	
	}
		
	self.init();
	
});