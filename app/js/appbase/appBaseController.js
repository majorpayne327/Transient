var app = angular.module('transientApp')

app.controller('AppBaseController', function ($location, pageTitle) {

	var self = this;
	
	self.baseLoc = pageTitle;
	self.entertain = "entertainment"
	
	self.loggedin = false;
	
  
});

app.controller('LoginModalCtrl', function ($modal, $log) {

	var self = this;

  self.openLogin = function (loggedin, size) {
    var modalInstance = $modal.open({
      templateUrl: '/js/appbase/loginModal.html',
      controller: 'LoginModalInstanceCtrl as loginInstanceCtrl',
      size: size
    });

    modalInstance.result.then(function () {
		console.log(loggedin);    	
    	loggedin = true;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('LoginModalInstanceCtrl', function ( $modalInstance, $location) {

  var self = this;

  self.login = function () {
  	 loggedin = true;
  	 $location.path('/user/');    
    $modalInstance.close();
    
  };

  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

app.controller('RegisterModalCtrl', function ($modal, $log) {

	var self = this;

  self.openRegister = function (size) {

    var modalInstance = $modal.open({
      templateUrl: '/js/appbase/registerModal.html',
      controller: 'RegisterModalInstanceCtrl as registerInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function () {
    	
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('RegisterModalInstanceCtrl', function ( $modalInstance, $location) {

  var self = this;

  self.states = [
  		{name:"Alabama", value:"AL"},
  		{name:"Alaska", value:"AK"},
  		{name:"Arizona", value:"AZ"},
  		{name:"Arkansas", value:"AR"},
  		{name:"California", value:"CA"},
		{name:"Colorado", value:"CO"},
		{name:"Connecticut", value:"CT"},
		{name:"Delaware", value:"DE"},
		{name:"District Of Columbia", value:"DC"},
		{name:"Florida", value:"FL"},
		{name:"Georgia", value:"GA"},
		{name:"Hawaii", value:"HI"},
		{name:"Idaho", value:"ID"},
		{name:"Illinois", value:"IL"},
		{name:"Indiana", value:"IN"},
		{name:"Iowa", value:"IA"},
		{name:"Kansas", value:"KS"},
		{name:"Kentucky", value:"KY"},
		{name:"Louisiana", value:"LA"},
		{name:"Maine", value:"ME"},
		{name:"Maryland", value:"MD"},
		{name:"Massachusetts", value:"MA"},
		{name:"Michigan", value:"MI"},
		{name:"Minnesota", value:"MN"},
		{name:"Mississippi", value:"MS"},
		{name:"Missouri", value:"MO"},
		{name:"Montana", value:"MT"},
		{name:"Alabama", value:"NE"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"},
		{name:"Alabama", value:"AL"}
  ];
/**
                                  
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
**/

  self.register = function () {
  	
  	 $location.path('/user/');
  	 
    $modalInstance.close();
  };

  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});