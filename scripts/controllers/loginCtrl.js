'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('loginCtrl', ['$scope', '$state', '$location', 'apiService', 'AuthenticationService',  
    function($scope, $state, $location, apiService, AuthenticationService) {

    // reset login status
    AuthenticationService.ClearCredentials();
    console.log('in login ctrl');
    $scope.userInfo = {};

    $scope.userLogin = function () {

        AuthenticationService.Login($scope.userInfo.username, $scope.userInfo.password, function(response) {
            if(response.success) {
                AuthenticationService.SetCredentials($scope.userInfo.username, $scope.userInfo.password);
                $state.go('dashboardStep1');
            } else {
                console.log(response.message);
                $scope.error = response.message;
            }
        });
    };


    

/*    $scope.userLogin = function() {
        console.log($scope.userInfo);
        $scope.loggedinUser = $scope.userInfo;
        apiService.doApiCall('api/login', 'POST', $scope.userInfo)
        .then(function (data) {
            $scope.loggedinUser = user; //console.log(data);
        }, function (error) {
            // promise rejected ... display generic no data found on table
            console.log('error', error);
        });
    }*/
    $scope.resetPassword = function() {
        console.log($scope.userInfo);

        apiService.doApiCall('api/resetPassword', 'POST', $scope.userInfo)
        .then(function (data) {
            $scope.loggedinUser = user; //console.log(data);
        }, function (error) {
            // promise rejected ... display generic no data found on table
            console.log('error', error);
        });
    }
    $scope.signUp = function() {
        console.log($scope.userInfo);

        apiService.doApiCall('api/resetPassword', 'POST', $scope.userInfo)
        .then(function (data) {
            $scope.loggedinUser = user; //console.log(data);
        }, function (error) {
            // promise rejected ... display generic no data found on table
            console.log('error', error);
        });
    }
    
}]);
