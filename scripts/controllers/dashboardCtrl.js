'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('dashboardCtrl', ['$scope', '$state', 'dashboardService',  function($scope, $state, dashboardService) {


    console.log('in DashboardCtrl ctrl');
    $scope.dashboard = {};

    console.log($state.current);

    $scope.goToDashboardStep1 = function() {
    	//$scope.dashboard = dashboardService;
    	/*$scope.dashboard.business = dashboardService.business;
    	$scope.dashboard.address = dashboardService.address;
    	$scope.dashboard.city = dashboardService.city;
    	$scope.dashboard.zip = dashboardService.zip;*/
        console.log($scope.dashboard);
    	$state.go('dashboardStep1');
    }
    $scope.goToDashboardStep2 = function() {
    	/*dashboardService.business = $scope.dashboard.business;
    	$scope.dashboard.business = dashboardService.business;
    	$scope.dashboard.address = dashboardService.address;
    	$scope.dashboard.city = dashboardService.city;
    	$scope.dashboard.zip = dashboardService.zip;
    	console.log(dashboardService);*/
        console.log($scope.dashboard);
    	$state.go('dashboardStep2');
    }
    $scope.goToDashboardStep3 = function() {
    	/*$scope.dashboard = dashboardService;
    	console.log($scope.dashboard);*/
        console.log($scope.xx);
        console.log($scope.dashboard);
    	$state.go('dashboardStep3');
    }
    $scope.goToDashboardStep4 = function() {
    	//console.log(dashboardService);
    	$state.go('dashboardStep4');
    }
    $scope.goToDashboardStep5 = function() {
    	//console.log(dashboardService);
    	$state.go('dashboardStep5');
    }
    $scope.goToDashboardStep6 = function() {
    	//console.log(dashboardService);
    	$state.go('dashboardStep6');
    }
    $scope.saveDashboard = function() {
    	console.log($scope.dashboard);
    }
    
}]);
