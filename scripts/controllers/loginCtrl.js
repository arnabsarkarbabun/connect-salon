'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('loginCtrl', ['$scope', '$state', 'loginService',  function($scope, $state, loginService) {


    console.log('in login ctrl');
    $scope.userInfo = {};

    $scope.userLogin = function() {
        console.log($scope.userInfo);

        loginService.login($scope.userInfo).then(function (user) {
          $scope.loggedinUser = user;
        });
    }
    $scope.resetPassword = function() {
        console.log($scope.userInfo);

        loginService.resetPassword($scope.userInfo).then(function (user) {
          $scope.loggedinUser = user;
        });
    }
    $scope.signUp = function() {
        console.log($scope.userInfo);

        loginService.signUp($scope.userInfo).then(function (user) {
          $scope.loggedinUser = user;
        });
    }
    
}]);
