'use strict';

angular.module('markdown', []).
  directive('markdown', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="span11"><div class="span6"><textarea id="text-input">Type **Markdown** here.</textarea></div> <div class="span5" id="preview"> </div></div>',
      link: function (scope, element, attrs) {
      	var textinput = $('#text-input');
      	console.log(textinput);
      	var preview = $('#preview');
       	textinput.on('input asdasdasd ', function(){
       		console.log('input' + this.value.toString());
          var numberOfLineBreaks = (this.value.match(/\n/g)||[]).length;
          console.log(numberOfLineBreaks);
          var test = this.value;
          console.log(test.toString());
       		preview.html(markdown.toHTML(this.value));
          console.log(markdown.toHTML(this.value));
       	});
      }
    };
  });