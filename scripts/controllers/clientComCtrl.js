(function() {
    'use strict';
    var connectApp = angular.module('connectUiApp');
    connectApp.controller('clientComCtrl', ['$scope', '$state', 'clientComService',  function($scope, $state, clientComService) {
        var promise = clientComService.getClientComSettings();
        $scope.notification = {};
        promise.then(
            function(response){
                console.log(response);
            }
        );
    
    }]);

})();