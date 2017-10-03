(function () {
  'use strict';

  angular.module('App.layout.perfil')
    .directive('ngFileSelect', ngFileSelect);

  function ngFileSelect() {
    return {
      link: function (vm, el) {
        el.bind('change', function (e) {
          vm.file = (e.srcElement || e.target).files[0];
          vm.getFile();
        });
      }
    };
  }

})();
