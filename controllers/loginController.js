app.controller("loginController",function($scope,$state,$rootScope){

  $scope.clickFunction=function(){
    $state.go("home.dashboard");
  }

});
