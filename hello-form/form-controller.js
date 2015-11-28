(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);

    FormController.$inject = ['$scope'];

    function FormController($scope) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
