  app.controller("dashboardController",function($scope,productService,$rootScope){

   //$scope.readJson=function(){
    $rootScope.product=productService.readFunction();

    $rootScope.product
    .then(function(response)
    {
      $rootScope.product=response.data;

  });


})
