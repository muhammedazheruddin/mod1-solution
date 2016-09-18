(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);


  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.menu = "";
    $scope.message = "";
    $scope.myColor = "";

    $scope.sayMessage = function() {
      var nr = calculateMenu($scope.menu);
      if (nr > 3) {
        $scope.message = "Too much!";
        $scope.myColor = 'green';
      }
      else if (nr <= 3 && nr > 0) {
        $scope.message = "Enjoy!";
        $scope.myColor = 'green';
      }
      else {
        $scope.message = "Please enter data first";
        $scope.myColor = 'red';
      }
    };
  };

  function calculateMenu(str) {
    var food = str.split(',');
    if (food == "") {
      return '0';
    }
    else {
      for (var i = 0; i < (food.length); i++) {
        if (food[i] === "") {
          food.splice(i, 1);
        }
      }
      return food.length;
   }
  }
})();
