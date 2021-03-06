// Generated by CoffeeScript 1.10.0
(function() {
  var ContactDetailController;

  ContactDetailController = (function() {
    ContactDetailController.$inject = ['$log', '$stateParams', '$state'];

    function ContactDetailController($log, $stateParams, $state) {
      var vm;
      vm = this;
      $log.info($stateParams);
      vm.$stateParams = $stateParams;
      vm.randomNum = Math.random();
      vm.reloadState = function() {
        $log.info($state.current, $stateParams);
        $state.reload();
      };
      return;
    }

    return ContactDetailController;

  })();

  angular.module('app').controller('ContactDetailController', ContactDetailController);

}).call(this);

//# sourceMappingURL=contactDetail.controller.js.map
