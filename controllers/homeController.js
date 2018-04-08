app.controller('homeController',function($scope,$mdSidenav,productService,$rootScope,$mdDialog){


      $scope.product=productService.readFunction();
      $scope.arrayManufacturer = [];
      $scope.arrayOS=[];
      $scope.arrayStorage=[];
      $scope.arrayCamera=[];
      $scope.customFullscreen=false;
      $scope.status = '  ';

      function DialogController($scope, $mdDialog) {
     $scope.hide = function() {
       $mdDialog.hide();
     };

     $scope.cancel = function() {
       $mdDialog.cancel();
     };

     $scope.answer = function(answer) {
       $mdDialog.hide(answer);
     };
   }

          $scope.showAlert = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('This is an alert title')
            .textContent('You can specify some description text in here.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
      };

      $scope.showAdvanced = function(ev) {
       $mdDialog.show({
         controller: DialogController,
         templateUrl: 'templates/dialogBoxContainer.html',
         parent: angular.element(document.body),
         targetEvent: ev,
         clickOutsideToClose:true,
         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
       })
       .then(function(answer) {
         $scope.status = 'You said the information was "' + answer + '".';
       }, function() {
         $scope.status = 'You cancelled the dialog.';
       });
}

      $scope.product
      .then(function(response){
        $scope.product=response.data;
         angular.forEach($scope.product, function(value,key) {
           console.log(value.specs.os);
           $scope.arrayOS.push(value.specs.os);
           $scope.dataOS=$scope.arrayOS.filter(function(ele,index,self)
           {
             return index==self.indexOf(ele);
           })
        });
        angular.forEach($scope.product, function(value,key) {

           console.log(value.specs.manufacturer);
           $scope.arrayManufacturer.push(value.specs.manufacturer);
           $scope.dataManufacturer=$scope.arrayManufacturer.filter(function(ele,index,self)
           {
             return index==self.indexOf(ele);
         });

    })

    angular.forEach($scope.product, function(value,key) {

       console.log(value.specs.storage);
       $scope.arrayStorage.push(value.specs.storage);
       $scope.dataStorage=$scope.arrayStorage.filter(function(ele,index,self)
       {
         return index==self.indexOf(ele);
     });


     angular.forEach($scope.product, function(value,key) {

        console.log(value.specs.camera);
        $scope.arrayCamera.push(value.specs.camera);
        $scope.dataCamera=$scope.arrayCamera.filter(function(ele,index,self)
        {
          return index==self.indexOf(ele);
      });
    })

})

  })
    $scope.toggleLeft = buildToggler('left');


    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  });
