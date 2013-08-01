'use strict';

angular.module('tags', []).
  directive('tags', [function ($compile, tagService) {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      template: "<div></div>",
      link: function (scope, element, attrs) {

          var tags = [
            {
              "tagid": "123",
              "tagName": "tag1",
              "children": [
                {
                  "tagid": "345",
                  "tagName": "tag2",
                  "children": [
                    {
                      "tagid": "738",
                      "tagName": "tag4"
                    }
                  ]
                }
              ]
            },
            {
              "tagid": "567",
              "tagName": "tag3"
            }

          ];
          var newOL = document.createElement('ul');

          appendDOM(tags, newOL);
          console.log($(newOL)[0]);
          $(element).append(newOL);
          function appendDOM(tags, dom) {
            
            
            for (var i=0; i<tags.length; i++){
              var li = document.createElement('li');
              var text = document.createTextNode(tags[i].tagName);
              li.appendChild(text);
              dom.appendChild(li);
              var ol = document.createElement('ul');
              var li1 = document.createElement('li');
              var input = document.createElement('input');
              li1.appendChild(input);
              ol.appendChild(li1);
              li.appendChild(ol);
              if (tags[i].children) {

                  appendDOM(tags[i].children, ol)
              } else {
                return;
              }
              

            }
          }
      }
    }
  }]);