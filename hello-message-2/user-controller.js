(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope'];

    function UserController($scope) {
        var vm = this;
        vm.message = 'Luiz';

        $scope.user = 'Luiz';

        activate();

        function activate() {

        }
    }
})();
