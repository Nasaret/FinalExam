angular.module("hoBook").factory("donneesService", donneesService);
function donneesService($http){
  return {
    donneesGet: donneesGet
  }
  function donneesGet() {
    return $http.get('/hotel-data.json').then(complete).catch(error);
  }
  
  function complete(response){
    return response;
  }
  function error(error){
    return error;
  }
}
