'use strict';

angular.module('Directives').directive('ssloading',
    function($rootScope) {
        return {
            scope: false,
            restrict: 'A',
            replace:false,
            link: function(scope,element, attrs){
                var loadingClass='show-loading loading',
                    startEvent = attrs.loadingEvent+'-start',
                    endEvent = attrs.loadingEvent+'-end',
                    unsuscribeEnd = $rootScope.$on(endEvent, function(){
                        element.removeClass(loadingClass);
                        element.removeAttr('disabled');
                    }),
                    unsuscribeStart = $rootScope.$on(startEvent, function(){
                        element.addClass(loadingClass);
                        element.attr('disabled','disabled');
                    });
                element.find('spinner').on('click',function(event){
                    event.stopPropagation();
                });
                // element.on('click', function(){
                //     element.addClass(loadingClass);
                // });
                element.on('$destroy',function(){
                    unsuscribeEnd();
                    unsuscribeStart();
                    element.find('spinner').off('click');
                });
            }
        };
    }
);  