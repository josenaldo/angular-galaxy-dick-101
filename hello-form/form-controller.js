(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormController', FormController);

    FormController.$inject = ['$scope'];

    function FormController($scope) {
        var vm = this;
        vm.mudarNome= mudarNome;

        activate();

        function activate() {
            vm.name="Dadinho";
        }

        function mudarNome(novoNome) {
            if (novoNome) {
                vm.name=novoNome;
            } else {
                vm.name="Dadinho é o caralho, meu nome é Zé Pequeno, porra.";
            }
        }
    }
})();
