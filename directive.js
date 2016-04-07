'use strict';

angular.module('ngApp')
  .directive('progress', function () {
    return {
      template: '<div class="progress"><div></div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        let progress = element.children();
        let bar = progress.children();
        bar.addClass('indeterminate');

        setTimeout(() => {
          bar
            .removeClass('indeterminate')
            .addClass('determinate light-green')
            .css('width', '70%');
        }, 2000);
      }
    };
  });
