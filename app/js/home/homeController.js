var app = angular.module('transientApp');

app.controller('HomeController', function () {
	var self = this;
	
	var titles = [
		'Lovin\' Cup',
		'Lazer Base',
		'Lilac Festival'
	];
	
	var imgs = [
		'/images/locationPics/lovinCup.jpg',
		'/images/locationPics/lazerbase.png',
		'/images/locationPics/lilacFestival.jpg'	
	];
	
	var descrs = [
		'1 Description',
		'2 Description',
		'3 Description'	
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