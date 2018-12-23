'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:createClientCtrl
 * @description
 * # createClientCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('createClientCtrl', ['$scope', '$state',  function($scope, $state) {


    console.log('in createClient ctrl');
    $scope.clientInfo = {};

    $scope.createClient = function() {
        console.log($scope.clientInfo);

        clientService.createClient($scope.clientInfo).then(function (client) {
            
          // ----
        });
    }
    
    
}]);
