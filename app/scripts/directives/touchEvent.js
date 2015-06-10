'use strict';

angular.module('Directives').directive('touchEvent',
    function() {
        return {
            scope: false,
            restrict: 'A',
            replace:false,
            link: function(scope,element, attrs){

                element.on('touchstart', function(event) {
                  element.addClass(attrs.touchStartClass);
                });

                element.on('touchend', function(event){
                    element.removeClass(attrs.touchStartClass);
                    if (attrs.touchEndClass){
                        element.addClass(attrs.touchEndClass);
                    }
                });
            }
        }
});  