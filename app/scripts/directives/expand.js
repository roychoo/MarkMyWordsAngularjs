'use strict';

angular.module('expand', []).
  directive('expand', [function () {
    return {
      restrict: 'A',
      replace: true,
      scope: true,
      link: function (scope, element, attrs) {
        var sidebar = $('#' + attrs.expand);
        var direction = attrs.expandDirection;
        var reverseDirection = direction === 'right' ? 'left': 'right';
        var width = sidebar.width();
        sidebar.css(direction, '-' + sidebar.width() + 'px');
    //    sidebar.addClass('navigation');
        $(element).on('click', function(){
          sidebar.addClass('navigation');
          var parent = $(this).parent();   
          if (sidebar.css(direction) === '0px') {
            parent.css(direction, '');
          $('.'+reverseDirection+'-arrow').css(reverseDirection, '');
            sidebar.css(direction, '-' + width + 'px');
            $(element).css(direction, '');

          } else {           
            parent.css(direction, width + 'px');
            var arr = parent.children();

            $('.'+reverseDirection+'-arrow').css(reverseDirection, '-' + width + 'px');
            sidebar.css(direction, '0');
            $(element).css(direction, width + 'px');
          }
          if ($('.icon-chevron-sign-right', this)[0]) {
            $('i', this).removeClass('icon-chevron-sign-right');
            $('i', this).addClass('icon-chevron-sign-left');
          } else {
             $('i', this).removeClass('icon-chevron-sign-left');
            $('i', this).addClass('icon-chevron-sign-right');
          }
        });
      }
    };
  }]);