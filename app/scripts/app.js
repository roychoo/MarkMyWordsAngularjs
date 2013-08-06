'use strict';

angular.module('MarkMyWordsApp', ['markdown', 'tagService', 'expand', 'tags', 'taginput'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(tagServiceProvider) {
  	tagServiceProvider.getTags();
  });
