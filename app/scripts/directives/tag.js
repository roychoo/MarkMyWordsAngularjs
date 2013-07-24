'use strict';

angular.module('tag', []).
  directive('tag', function () {
    return {
      restrict: 'A',
      scope: {
        tag: '=tag'
      },
      link: function (scope, element, attrs) {
          console.log(element);
          element.bind('input', function(){
            var value = this.value;
              scope.markdown.text = this.value;
              console.log('hello world' + this.value);
          });

      }
    };
  });