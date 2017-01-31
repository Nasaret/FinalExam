angular.module("hoBook", ["ngRoute"]).config(config).controller("hotelController",hotelCtrl);
function config($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl : "angular-app/home/home.html",
    controller : "homeCtrl",
    controllerAs : "vm"
  })
  .when("/inscription", {
    templateUrl: "angular-app/inscription/inscription.html",
    controller : "inscriptionController",
    controllerAs : 'inscriptionCtrl'
  })
  .when("/connection", {
    templateUrl: "angular-app/connect/connect.html",
    controller : "connectionController",
    controllerAs : 'connectionCtrl'
  })
  .when("/hotel/:hotelID", {
    templateUrl: "angular-app/hotel/hotel.html",
    controller: 'hotelController',
    controllerAs: 'hotelCtrl'
  })
  .when("/message/add",{
    templateUrl : "angular-app/messages/messages-add/message.html",
    controller : "messageAddCtrl",
    controllerAs : "vm"
  })
  .otherwise({redirectTo : "/"});
}

hoBook.controller("inscriptionCtrl", function() {

});

hoBook.controller("connectionCtrl", function() {

});


function hotelCtrl($routeParams, donneesService, $scope) {
  var hotelID = $routeParams.hotelID;

  $scope.hotel = null;

  donneesService.donneesGet().then((response) => {
    console.log(response);
    $scope.hotel = response.data[hotelID];
  });
  console.log(hotelID);
}
