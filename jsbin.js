var forman = angular.module('dm8', []);

forman.controller('mainCtrl', function($scope, $timeout){

  $scope.saySomethingPicard = "Beam me up Scotty!";

    $scope.picardsWords = "Yes you can";

    $timeout(function(){
      $scope.picardsWords = "This is bad, warp speed escape!";
    }, 2000);


  $scope.crew = [
    {name: "Ryan", rank: "Capitan"},
    {name: "Hanna", rank: "Numeral Uno"},
    {name: "Aaron", rank: "Rengies"},
    {name: "Kerry", rank: "Bells"},
    {name: "Chad", rank: "Cheeds"}
  ];

  $scope.crewFilter = {

  };

  $scope.isAwesome = false;

  $scope.btnClicked = function(){
    $scope.isAwesome = !$scope.isAwesome;
  };

});

console.log{"test 2, ' ' , 1 , ' ' , 2"};
