'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('dashboardCtrl', ['$scope', '$state', 'Upload', 'dashboardService',  function($scope, $state, Upload, dashboardService) {


    console.log('in DashboardCtrl ctrl');
    $scope.dashboard = {};
    $scope.dashboard.saloonWeekScheduleDTOs = new Array(7);
    $scope.weekDays = [{key:'MON',value:'Monday'},{key:'TUE',value:'Tuesday'},{key:'WED',value:'Wednesday'},{key:'THUR',value:'Thursday'},{key:'FRI',value:'Friday'},{key:'SAT',value:'Saturday'},{key:'SUN',value:'Sunday'}];
    for(var i=0; i<7; i++){
        $scope.dashboard.saloonWeekScheduleDTOs[i] = {};
        $scope.dashboard.saloonWeekScheduleDTOs[i].weekDay=$scope.weekDays[i].key;
        $scope.dashboard.saloonWeekScheduleDTOs[i].isavailable = false;
        $scope.dashboard.saloonWeekScheduleDTOs[i].fromTime = {};
        $scope.dashboard.saloonWeekScheduleDTOs[i].toTime = {};
    }
    console.log($state.current);
    $scope.stylistList = new Array();
    $scope.stylist = {};
      
    $scope.addStylist = function(){
        $scope.stylistList.push($scope.stylist);
        $scope.stylist = {};
    }

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
    $scope.uploadStylistPhoto = function(file){
        Upload.upload({
            url: 'images/',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
    
}]);
