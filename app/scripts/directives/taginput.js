'use strict';

angular.module('taginput', []).
directive('taginput', [
    function() {
        return {
            restrict: 'A',
            replace: false,
            scope: true,
            link: function(scope, element, attrs) {
                console.log('hello world');
                $(element).on('click', function() {
		    $(this).after('<div>hello</div>');
                });
            }
        };
    }
]);
