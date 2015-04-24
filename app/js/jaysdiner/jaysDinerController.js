var app = angular.module('transientApp');

app.controller('JaysDinerController', function () {

	var self = this;
	
	self.reviews = [
		{
			image: "/images/userPics/Dr_Crane.jpg",
			user: 'DrCrane',
			title: "Quaint if you're into that sort of thing...",
			descr: "Though not my typical fare, I did enjoy tossed salad and scrambled eg...",
			likes: 3,
			dislikes: 2 					
		},{
			image: "/images/userPics/elduderino.jpg",
			user: 'El_Duderino98',
			title: "Better burgers than In-n-Out - ",
			descr: "Waitress was nice even though Walt was fighting her about his \"1st amendm...",
			likes: 4,
			dislikes: 1				
		}
	];
	
	self.range = function (num) {
		return new Array(num);
	};
	
	self.image = "/images/userPics/ColtonProfile.jpg";
	self.user = "TheColtr0n";
	self.title = "Super Amazing Review...";
	self.descr = "";
	self.likes = 3;
	self.dislikes = 2;
	
	self.submitReview = function () {
		var review = {
			image: self.image,
			user: self.user,
			title: self.title,
			descr: self.descr,
			likes: self.likes,
			dislikes: self.dislikes			
		}
		
		self.reviews.push(review);
		
		self.descr = "";
	};	
});