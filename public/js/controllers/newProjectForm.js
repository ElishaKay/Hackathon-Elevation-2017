app.controller('projControl', ['$scope','$stateParams','mainService', '$state', function($scope, $stateParams, mainService, $state) {

  $scope.project = mainService.findById($stateParams.id); 
  //$scope.project = {key: 'value', key: integer, _id: integerfrommongo}

  $scope.addSubmission = function () {
    mainService.addSubmission($stateParams.id, $scope.submissionText,$scope.project);
  } 
}]);







// Below: Commented out Jan 14

// app.controller('projControl', ['$scope', 'mainService', '$state', function($scope, mainService, $state){
// // app.controller('projControl', function ($scope) {

//   $scope.projects = [
//     {
//       name: $scope.name,
//       description: $scope.description,
//       date: $scope.date,
//       image_url: $scope.image_url
//     }
//   ];

//   $scope.addProject = function (e) {
//     if ($scope.name === '') { return; }

//     var project = { 
//       name: $scope.name,
//       description: $scope.description,
//       date: $scope.date,
//       image_url: $scope.image_url
//     };

//     $scope.name = '';
//     $scope.description = '';
//     $scope.date = '';
//     $scope.image_url = '';

//     $scope.projects.push(project);
//   };

//   $scope.removeProject = function (index) {
//     $scope.projects.splice(index, 1);
//   };

//   $scope.readmore = function(){
//     $state.go('proj1');
//   };

//    $scope.gohome = function(){
//     $state.go('home');
//   };

// //getAll invoked upon /dashboard load, that loads all of the user's projects
// mainService.getAllDash().then(function(){
//   console.log('dash controller getAll invoked');
//   // $scope.companies = mainService.companies;
//   console.log('here is $scope.companies');
//   console.log($scope.companies);
// }).catch(function(err){
//   console.log(err);
// });
  
// }]);





// Below: Commented out before Jan 14

// document.getElementById("files").onchange = function () {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//         // get loaded data and render thumbnail.
//         document.getElementById("image").src = e.target.result;
//     };

//     // read the image file as a data URL.
//     reader.readAsDataURL(this.files[0]);
// };
