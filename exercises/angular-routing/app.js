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
  .when('/math/:operation/:num1/:num2', {
    template: '<h3>The result of your calculation is:</h3><h1 class="text-primary"><strong>{{result}}</strong></h1>',
    controller: 'CalculatorController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});
