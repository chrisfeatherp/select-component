var app = angular.module('app',['uiComponents']);

app.controller('SelectController', ['$scope', function($scope){

    $scope.options = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    $scope.selectedOption = 'Select an option';

    $scope.addValue =  function () {
        $('.dupe').hide();
        $('.empty').hide();
        if(typeof ($scope.newValue) !="undefined" && $scope.newValue ) {

            if($scope.options.indexOf($scope.newValue) == -1) {
                console.log($scope.options.indexOf($scope.newValue));
                $scope.options.push($scope.newValue);
                $scope.newValue = null;
            }else{
                $('.dupe').show();
            }
        }else{
            $('.empty').show();
        }
    }



    // indexOf implementation for IE
    var indexOf = function(needle) {
        if(typeof Array.prototype.indexOf === 'function') {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function(needle) {
                var i = -1, index = -1;

                for(i = 0; i < this.length; i++) {
                    if(this[i] === needle) {
                        index = i;
                        break;
                    }
                }

                return index;
            };
        }

        return indexOf.call(this, needle);
    };

    
}])