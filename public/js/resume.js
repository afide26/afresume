var myResume = angular.module('myResume', [ ]);

myResume.controller('ResumeController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/resumeData.json').success(function(data) {
    $scope.main = data.main;
    $scope.address = data.main.address;
  });
  $scope.name = "Alan Fidelino"
}]);
