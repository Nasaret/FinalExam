angular.module("hoBook").controller("homeCtrl",homeCtrl);
function homeCtrl(donneesService){
  var vm = this;
  vm.hotels = null;

  donneesService.donneesGet().then((response) => {
    console.log(response);
    vm.hotels = response.data;
  });
}
