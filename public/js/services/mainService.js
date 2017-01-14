// app.factory('mainService', ['$http', function($http){


  // Code Added Jan 14
 app.factory('mainService', function ($http) {  

var projectService = {
  projects: [],
};

projectService.findById = function(someId){
  for (var i = 0; i < projectService.projects.length; i++) {
    if (projectService.projects[i]._id === someId) {
      console.log(projectService.projects[i])
      return projectService.projects[i];
    }
    // else return null;
  };
 //find the project inside of projectService.projects associated with someId
  //return that project object
}

projectService.getAll = function () {
  return $http.get('/dashboard').then(function (data) {
  // this copies the response posts to the client side
  // 'projects' under 'projectService'
  angular.copy(data.data, projectService.projects);
});
};

projectService.create = function (project) {
  return $http.post('/dashboard', project).then(function (res) {
    projectService.projects.push(res.data);
  });
};

projectService.delete=function (id) {
  return $http.delete('/dashboard/' + id)
};

projectService.addSubmission = function(Projectid, submissionText, project) {
  var url = "/dashboard/" + Projectid + "/submission/";
  var submission = {text: submissionText};
  $http.post(url, submission).then(function (res) {
      console.log(res);  
  project.submissions.push(submission);    
  });
};

return projectService;

// Above: End of Code Added Jan 14

  var serviceData = {
    companies: [
    
      // {
      //   projTitle: "daves proj",
      //   projCompany: "daves comp",
      //   projDescription: {
      //     desc: "daves desc",
      //     langTags: ['angular']
      //   }
      // }
      
    ],
    getAllDash: function(){
      console.log('service getAllDash invoked');
      return $http.get('/dashboard').then(function(res){
        angular.copy(res.data, serviceData.companies);
      }).catch(function(err){
        console.error(err);
      });
    },

     getAll: function(){
      console.log('service getAll invoked');
      return $http.get('/home').then(function(res){
        angular.copy(res.data, serviceData.companies);
      }).catch(function(err){
        console.error(err);
      });
    }
  };

  return serviceData;


});
