app.controller('HomeController', function($scope){
  $scope.message = "Welcome to the Home Page.";
});

app.controller('DogsController', function($scope){
  $scope.message = "You are now on the Dogs Page.";
});

app.controller('ProjectsController', function($scope){
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
  console.log("fofofofofofofo");
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
})
