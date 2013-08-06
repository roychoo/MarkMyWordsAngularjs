angular.module('tagService', [])
    .provider('tagService', {
    tag: null,
    getTags: function() {},
    $get: function($http) {
        $http.get('http://localhost:3000/test').success(function(results) {
            console.log('hello world');
            console.log(results);
            tag = results;

            return tag;
        });
    }
});
