angular.module('uiComponents', [])
    .directive('selectComponent', function() {

        return {
            restrict: 'E',
            require:'^ngModel',
            replace: true,
            scope: {
                options: '=',
                ngModel: '='
            },
            templateUrl : '/select-component/template/select.html',
            link: function (scope, element) {

                scope.selectedOptionIndex = null;

                var labelElement = element.find('div.label'),
                    listElement = element.find('ul.options'),

                    defaultLabel = 'Select an option';

                scope.$watch('ngModel',function(v){
                    scope.setLabel();
                },true);

                scope.setLabel = function() {
                    if (typeof (scope.ngModel) =="undefined" || !scope.ngModel || scope.ngModel.length < 1) {
                        scope.label = defaultLabel;
                    } else {
                        scope.label = scope.ngModel;
                    }
                };

                scope.setLabel();

                scope.selectVal = function (index) {
                    if(scope.options.length > index) {
                        scope.selectedOptionIndex = index;
                        scope.ngModel =  scope.options[index];
                        scope.toggleState();
                    }
                };

                scope.toggleState = function () {
                    labelElement.toggleClass('open');
                    listElement.toggleClass('open');
                };

            }
        };
});