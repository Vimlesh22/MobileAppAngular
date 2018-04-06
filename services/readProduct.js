app.service("productService",function($http) {

  return{
    readFunction:function(){
      return $http.get("products.json")
      .then(function(response){
        return response;
      })
    }
  };

})
