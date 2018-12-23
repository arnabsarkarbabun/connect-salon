
'use strict';
(function(){
    var connectUi = angular.module('connectUiApp');
    connectUi.controller('settingsCtrl',['$scope', function($scope){
        $scope.settings = {};
        $scope.timeStamps = new Array();
        for(let i=1; i<9; i++){
            var tmpHour = {};
            tmpHour.option = i + ' Hour';
            tmpHour.value = i;
            $scope.timeStamps.push(tmpHour);
        }
        for(let i=1; i<6; i++){
            var tmpHour = {};
            tmpHour.option = i + ' Day';
            tmpHour.value = i*24;
            $scope.timeStamps.push(tmpHour);
        }
        for(let i=1; i<4; i++){
            var tmpHour = {};
            tmpHour.option = i + ' Week';
            tmpHour.value = i*24*7;
            $scope.timeStamps.push(tmpHour);
        }
        for(let i=1; i<6; i++){
            var tmpHour = {};
            tmpHour.option = i + ' Month';
            tmpHour.value = i*24*30;
            $scope.timeStamps.push(tmpHour);
        }
        $scope.numberOfPeople = new Array();
        for(let i=1; i<=50; i++){
            $scope.numberOfPeople.push(i);
        }
        
        
    }]);
})()
