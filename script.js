(function () {
    'use strict';
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.answer = "";
        $scope.listOfProducts = "";
        $scope.showAnswer = function () {
        $scope.answer = calculate($scope.listOfProducts);
        }
        function calculate(products1) {
            let products = products1.split(',');
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].trim() == "") products.splice(i, 1);
            }
            if (products.length == 0) {
                return "Будь ласка, уведіть дані!";
            } else if (products.length <= 3) {
                return "На здоров'я!";
            } else {
                return "Це забагато!";
            }
        }
    }
})();