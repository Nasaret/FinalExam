angular.module("hoBook").controller("messagesAddCtrl", messagesAddCtrl);
function messagesAddCtrl(messagesFactory, $location){
  var vm = this;
  vm.addMessages = function(){
    var postData = {
      title : vm.title,
      content : vm.content,
      author : vm.author
    }
    if(vm.messageAddForm.$valid){
      messagesFactory.messageAddOne(postData).then(function(response){
        if(response.status===201){
          $location.path('/');
        }
      }).catch(function(error){
        console.log(error);
      });
    }
  }
}
