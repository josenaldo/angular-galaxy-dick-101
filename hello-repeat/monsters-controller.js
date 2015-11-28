(function() {
    'use strict';

    angular
        .module('app')
        .controller('MonstersController', MonstersController);

    MonstersController.$inject = ['$scope'];

    function MonstersController($scope) {
        var vm = this;

        activate();

        function activate() {
            initMonsters();
        }

        function initMonsters() {
            vm.monsters = [{
                name: "Monstro das Luzes Brancas",
                power: "Raio de Luz",
            }, {
                name: "Gyodai",
                power: "Aumenta monstros",
            }, {
                name: "Edward Cullen",
                power: "Morder a fronha",
            }, {
                name: "Lobo Mal",
                power: "Dentes grandes",
            }, {
                name: "Satan Goss",
                power: "Feio do caralho",
            }, {
                name: "Majinboo",
                power: "Vou te comer",
            }, {
                name: "Freeza",
                power: "Fala demais",
            }, ];
        }
    }
})();
