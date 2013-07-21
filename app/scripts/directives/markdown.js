'use strict';

angular.module('markdown', []).
  directive('markdown', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="span11"><div class="span6"><textarea id="text-input">Type **Markdown** here.</textarea></div> <div class="span5" id="preview"> </div></div>',
      link: function (scope, element, attrs) {
       
      }
    };
  });