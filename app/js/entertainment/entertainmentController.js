app = angular.module("transientApp");

app.controller("EntertainmentController", function () {

	self = this;
	
	self.sorting = 'distance'
	
	self.locations = [
		{ 
			title : "Lazer Base",
			descr : "Lazer tag for the whole family! Come in for our \"2-for-1\" rounds on Thursday nights!",			
			rating : 5,
			distance : 10,
		},{ 
			title : "Jurassic Park",
			descr : "After closing its doors due to safety concerns for a 3rd time, Jurassic Park is back and open for business!",			
			rating : 2,
			distance : 2,
		},{ 
			title : "Bowl-a-Roll",
			descr : "Come for bowling, stay for the grub!",			
			rating : 4,
			distance : 6,
		},{ 
			title : "Camelot",
			descr : "Camelot! Watch as the knights of The Round Table dance and delight you, 'tis truly a silly place!",			
			rating : 3,
			distance : 1,
		},{ 
			title : "Lovin' Cup",
			descr : "Come and get drinks, watch live performances, and participate in our trivia nights!",			
			rating : 4,
			distance : 20,
		}		
	]
});