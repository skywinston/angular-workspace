angular.module('myApp')
.controller('madLibsController', function($scope){
  $scope.madlibs =  {
                    boysName: '',
                    adjective: '',
                    pluralNoun: '',
                    insectPlural: '',
                    pluralNoun2: '',
                    verbEndingInS: ''
                  };
});
