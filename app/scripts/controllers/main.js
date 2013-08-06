'use strict';

angular.module('MarkMyWordsApp')
  .controller('MainCtrl', ['$scope', 'tagService', '$location', function ($scope, tagService, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
//    $scope.tags = tagService.getProperty();
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
  }]);
