'use strict';

angular.module('tags', []).
directive('tags', [
    function($compile, tagService) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            template: "<div></div>",
            transclude: false,
            compile: function(element, attrs, transclude) {

                var tags = [{
                        "tagid": "123",
                        "tagName": "tag1",
                        "children": [{
                                "tagid": "345",
                                "tagName": "tag2",
                                "children": [{
                                        "tagid": "738",
                                        "tagName": "tag4"
                                    }
                                ]
                            }
                        ]
                    }, {
                        "tagid": "567",
                        "tagName": "tag3"
                    }

                ];
                var newOL = document.createElement('ul');

                appendDOM(tags, newOL);
                console.log($(newOL)[0]);
                $(element).append(newOL);

                function appendDOM(tags, dom) {


                    for (var i = 0; i < tags.length; i++) {
                        var li = document.createElement('li');
                        var text = document.createTextNode(tags[i].tagName);
                        li.appendChild(text);
                        dom.appendChild(li);
                        var button = document.createElement('button');
                        button.setAttribute('taginput', '');
                        var textButton = document.createTextNode('Add');
                        button.appendChild(textButton);
                        li.appendChild(button);
                        if (tags[i].children) {
                            var ol = document.createElement('ul');
                            li.appendChild(ol);

                            appendDOM(tags[i].children, ol)
                        } else {
                            return;
                        }


                    }
                }
            }
        }
    }
]);
