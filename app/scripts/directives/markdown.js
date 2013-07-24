'use strict';

angular.module('markdown', []).
  directive('markdown', ['$compile', 'tagService',function ($compile, tagService) {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'views/subviews/markdown.html',
      link: function (scope, element, attrs) {
      	var textinput = $('#text-input');
      //	console.log(textinput);
      	var preview = $('#preview');
       	textinput.on('input asdasdasd ', function(){
       		//console.log('input' + this.value.toString());
          var numberOfLineBreaks = (this.value.match(/\n/g)||[]).length;
         // console.log(numberOfLineBreaks);
          var test = this.value;
         // console.log(test.toString());
       		preview.html(markdown.toHTML(this.value));
         // console.log(markdown.toHTML(this.value));
          scope.markdown.text = this.value;
          console.log(scope.markdown.text);
           
           console.log(element.contents());
       	});
        $compile(element.contents())(scope);  
        var tag = [{"id":1}];
        tagService.setProperty(tag);
      }
    };
  }]);