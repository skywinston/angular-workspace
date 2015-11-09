var app = angular.module('routerDemo', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController'
  })
  .when('/bio', {
    templateUrl: 'partials/bio.html',
    controller: 'BioController'
  })
  .when('/resume', {
    templateUrl: 'partials/resume.html',
    controller: 'ResumeController'
  })
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/dogs', {
    templateUrl: 'partials/dogs.html',
    controller: 'DogsController'
  })
  .otherwise({
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController'
  });
  $locationProvider.html5Mode(true);
});
