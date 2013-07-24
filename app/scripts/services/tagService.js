angular.module('tagService', [])
    .service('tagService', function () {
        var tag = [{"id":1}];
        return {
            getProperty: function () {
                return tag;
            },
            setProperty: function(value) {
                tag = value;
            }
        };
    });