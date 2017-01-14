app.controller('mainController', ['$scope', 'mainService', function($scope, mainService){

$scope.companies = mainService.companies;


  // $scope.alertMe = function(){
  //   console.log('hi there!');
  // };


// Below function: Commented out on Jan 14

// mainService.getAll().then(function(){
//   console.log('controller getAll invoked');
//   // $scope.companies = mainService.companies;
//   console.log($scope.companies);
// }).catch(function(err){
//   console.log(err);
// });


// Below: Code Added Jan 14
  mainService.getAll().then(function () {
    $scope.projectArray = mainService.projects;
  });

  $scope.addProject= function () {
    var project = {name: $scope.name,
      description:$scope.description,
      image:$scope.image
    }

   mainService.create(project);
   console.log(project)
 };

$scope.removeProject = function(index) {

  //get the specific project id
  var projectId = mainService.projects[index]._id;
  
  //invoke the $http delete in factory
  mainService.delete(projectId).then(function(response){
    //update the view
    mainService.getAll();
    console.log(response)
  });
 }




}]);