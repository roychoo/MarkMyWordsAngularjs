'use strict';

angular.module('MarkMyWordsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.markdown = { text: 'hello'};
    var obj = {};
   
    $scope.click = function() {
    	console.log($scope.markdown);
    	$.ajax({
		  type: "POST",
		  url: "/test",
		  data: $scope.markdown
		}).done(function( msg ) {
		  alert( "Data Saved: " + msg );
		});
    }
  });
