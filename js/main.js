var app = angular.module('app', ['uiComponents']);


app.controller('SelectController', ['$scope', function($scope) {
    
	$scope.options = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    $scope.selectedOption = 'Select an option';

}]);

