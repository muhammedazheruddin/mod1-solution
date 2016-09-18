(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  var myString = $scope.myVar;
  //var splitVal = myString.split(',');
  //console.log('The array has ' + splitCount.length + ' elements: ' + splitCount.join(' / '));
  var comma = ',';
  var splitCount = stringCount(myString,comma);

  function stringCount(haystack, needle) {
    if (!needle || !haystack) {
        return false;
    }
    else {
        var words = haystack.split(needle),
            count = {};
        for (var i = 0, len = words.length; i < len; i++) {
            if (count.hasOwnProperty(words[i])) {
                count[words[i]] = parseInt(count[words[i]], 10) + 1;
            }
            else {
                count[words[i]] = 1;
            }
        }
        return count;
    }

}
  $scope.showStatus() = function () {
      if(splitCount<=3)
      {
        $scope.sayMsg = "Enjoy!";
      }
      else if (splitCount>3) {
        $scope.sayMsg = "Too Much!";
      }
      else {
        $scope.sayMsg = "Enter a Value first";
      }
      $scope.$apply();
  };

}

})();
