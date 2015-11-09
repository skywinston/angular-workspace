app.controller('GlobalController', function($scope, $location){
  $scope.activeNav = '/';
  $scope.setActiveNav = function(path){
    $scope.activeNav = path;
  };

});

app.controller('HomeController', function($scope){
  $scope.message = "Welcome to the Home Page.";
});

app.controller('DogsController', function($scope){
  $scope.message = "You are now on the Dogs Page.";
});

app.controller('ProjectsController', function($scope, $rootScope, $location){

  $scope.projects = [
    {
      name: "DooBot",
      year: 2015,
      technologies: [
        'jQuery',
        'Angular',
        'MongoDB',
        'Express',
        'Node'
      ]
    },
    {
      name: "CallSheet",
      year: 2015,
      technologies: [
        'React',
        'FireBase'
      ]
    },
    {
      name: "Pixelangelo",
      year: 2015,
      technologies: [
        'jQuery',
        'jQueryUI'
      ]
    }
  ];
});

app.controller('BioController', function($scope){
  $scope.name = "Sky Winston";
  $scope.story = "Sky was born to make software...";
});

app.controller('ResumeController', function($scope){
  $scope.experience = [
    {
      company: 'Galvanize',
      position: 'Full-stack Web Development Student',
      duration: "6 Months"
    },
    {
      company: 'Apple',
      position: 'Sales',
      duration: "8 Years"
    },
    {
      company: 'Freelance Design',
      position: 'Designer',
      duration: "3 Years, on and off."
    }
  ];
});

// Route-Based Calculator
app.controller('CalculatorController', function($scope, $routeParams, $location){
  if($routeParams.operation === 'divide' && $routeParams.num2 === '0') {
    $scope.result = "You can't divide by zero silly.";
    return;
  }
  switch($routeParams.operation){
    case 'add' :
      $scope.result = Number($routeParams.num1) + Number($routeParams.num1);
      break;
    case 'subtract' :
      $scope.result = Number($routeParams.num1) - Number($routeParams.num2);
      break;
    case 'multiply' :
      $scope.result = Number($routeParams.num1) * Number($routeParams.num2);
      break;
    case 'divide' :
      $scope.result = Number($routeParams.num1) / Number($routeParams.num2);
      break;
  }
});
