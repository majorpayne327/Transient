app = angular.module("transientApp");

app.controller("EntertainmentController", function () {

	self = this;
	
	self.sorting = 'distance';
	
	self.locations = [
		{ 
			title : "Lazer Base",
			descr : "Lazer tag for the whole family! Come in for our \"2-for-1\" rounds on Thursday nights, and be sure to stick around for our \"MIDNIGHT FOG FRENZY\"!!!",
			pic: "/images/locationPics/lazer_base.png",
			rating : 5,
			distance : 10
		},{ 
			title : "Jurassic Park",
			descr : "After closing its doors due to safety concerns for a 3rd time, Jurassic Park is back and open for business!",
			pic: "/images/locationPics/jurassic_park.jpg",
			rating : 2,
			distance : 2
		},{ 
			title : "Bowl-a-Roll",
			descr : "Come for bowling, stay for the grub! Bowl-a-roll offers specials on Sundays where the shoe rental and each game only costs a $1.",
			pic: "/images/locationPics/bowlaroll.jpg",
			rating : 4,
			distance : 6
		},{ 
			title : "Camelot",
			descr : "Camelot! Bring the family and watch as the knights of The Round Table delight you with song and dance. 'Tis truly a silly place!",
			pic: "/images/locationPics/camelot.jpg",
			rating : 3,
			distance : 1
		},{ 
			title : "Lovin' Cup",
			descr : "Come for dinner or (prefereably \"and\"!) drinks, watch and listen to live performances, and participate in our trivia nights!",
			pic: "/images/locationPics/lovinCup.jpg",
			rating : 4,
			distance : 20
		}		
	];

	var titles = [
		'Lazer Base',
		'Lovin\' Cup',
		'Jurassic Park'
	];

	var imgs = [
		'/images/locationPics/lazer_base.png',
		'/images/locationPics/lovinCup.jpg',
		'/images/locationPics/jurassic_park.jpg'
	];

	var descrs = [
		"Lazer tag for the whole family! Come in for our \"2-for-1\" rounds on Thursday nights, and be sure to stick around for our \"MIDNIGHT FOG FRENZY\"!!!",
		"Come for dinner or (prefereably \"and\"!) drinks, watch and listen to live performances, and participate in our trivia nights!",
		"After closing its doors due to safety concerns for a 3rd time, Jurassic Park is back and open for business!"
	];

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
	};
	self.init();
});