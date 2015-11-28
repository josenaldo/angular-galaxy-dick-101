(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        var vm2 = this;
        vm2.message = "Camila";

        $scope.user = 'Camila';

        activate();

        function activate() {

        }
    }
})();
