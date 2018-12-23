'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
  .controller('dashboardCtrl', ['$scope', '$state', 'Upload', 'dashboardService', 'serviceCategoryService', 'submitOnBoardService', function($scope, $state, Upload, dashboardService, serviceCategoryService, submitOnBoardService) {

    console.log('in DashboardCtrl ctrl');
      
    //this object will hold all the onboarding data
    $scope.dashboard = {};
    
    //initialize week schedule.
    $scope.dashboard.saloonWeekScheduleDTOs = new Array(7);
    $scope.weekDays = [{key:'MON',value:'Monday'},{key:'TUE',value:'Tuesday'},{key:'WED',value:'Wednesday'},        {key:'THUR',value:'Thursday'},{key:'FRI',value:'Friday'},{key:'SAT',value:'Saturday'},{key:'SUN',value:'Sunday'}];
    for(var i=0; i<7; i++){
        $scope.dashboard.saloonWeekScheduleDTOs[i] = {};
        $scope.dashboard.saloonWeekScheduleDTOs[i].weekDay=$scope.weekDays[i].key;
        $scope.dashboard.saloonWeekScheduleDTOs[i].isavailable = false;
        $scope.dashboard.saloonWeekScheduleDTOs[i].fromTime = {};
        $scope.dashboard.saloonWeekScheduleDTOs[i].toTime = {};
    }
    

      
    console.log($state.current);
    
      //initialize stylists
    $scope.dashboard.stylistList = new Array();
    $scope.stylist = {};
      
      //initialize all services.
     
   
    $scope.getSubService = function(serviceId){
        serviceCategoryService.getServiceByCategory(serviceId)
        .then(function(response){
            console.log($scope.subServices);
        }, function(err){
           console.log(err); 
        });
    };


      
    
    $scope.addStylistSeq = 0;  
    $scope.addStylist = function(){
        var stylist_temp = {};
        var name_part = $scope.stylist.name.split(" ");
        stylist_temp.firstName = name_part[0];
        for(var i=1; i<name_part.length -1; i++){
            stylist_temp.firstName += " " + name_part[i];
        }
        stylist_temp.lastName = name_part.length > 1 ? name_part[name_part.length-1] : "";
        stylist_temp.emailId = $scope.stylist.emailId;
        stylist_temp.tempId = $scope.addStylistSeq++;
        $scope.dashboard.stylistList.push(stylist_temp);
        $scope.stylist = {};
    }

    $scope.goToDashboardStep1 = function() {
        console.log($scope.dashboard);
    	$state.go('dashboardStep1');
    }
    $scope.goToDashboardStep2 = function() {
        console.log($scope.dashboard);
    	$state.go('dashboardStep2');
    }
    $scope.goToDashboardStep3 = function() {
        console.log($scope.dashboard);
    	$state.go('dashboardStep3');
    }
    $scope.goToDashboardStep4 = function() {
    	console.log($scope.dashboard);
         serviceCategoryService.getAllCategory()
            .then(function(response){
                console.log(response);
                $scope.servicesOffered = response.data.result;  
                var categories = response.data.result;
                $scope.allService = new Array();
                var category = {};
                var service_id = 0;
                for( category of categories){
                    var categoryService = {};
                    categoryService.name=category.name;
                    categoryService.isChosen = false;
                    categoryService.noOfServices=category.masterServices.length;
                    categoryService.services=new Array();
                    var serviceItem = {};
                    for( serviceItem of category.masterServices){
                        var service = {};
                        service.name = serviceItem.name;
                        service.isChosen = false;
                        service.noOfSubService = serviceItem.masterSubServices.length;
                        service.price = 0;
                        service.duration =0;
                        service.subServices = new Array();
                        service.stylists = new Array();
                        var stylists = {};
                        for(stylists of $scope.dashboard.stylistList){
                            var stylistTemp = {}
                            stylistTemp.stylistDetails = stylists;
                            stylistTemp.isEnabled = false;
                            service.stylists.push(stylistTemp);
                        }
                        /*
                        var subService = {};
                        for( subService of serviceItem.masterSubServices){
                            var subServiceItem = {};
                            subServiceItem.name = subService.name;
                            subServiceItem.isChosen = false;
                            subServiceItem.price = 0;
                            subServiceItem.duration = 0;
                            service.subServices.push(subServiceItem);
                            subServiceItem.stylists = new Array();
                            var stylists = {};
                            for(stylists of $scope.dashboard.stylistList){
                                var stylistTemp = {}
                                stylistTemp.stylistDetails = stylists;
                                stylistTemp.isEnabled = false;
                                subServiceItem.stylists.push(stylistTemp);
                            }
                        }
                        */
                        categoryService.services.push(service);
                    }
                    $scope.allService.push(categoryService);
                }
            }, function(err){
                console.log(err);
            });
    	$state.go('dashboardStep4');
    }
    $scope.goToDashboardStep5 = function() {
    	console.log($scope.dashboard);
        $scope.serviceFlatten = new Array();
        var cat = {};
        for(cat of $scope.allService){
            var services = {};
            for(services of cat.services){
                $scope.serviceFlatten.push(services);
            }
        }
        console.log($scope.serviceFlatten);
    	$state.go('dashboardStep5');
    }
    $scope.goToDashboardStep6 = function() {
    	console.log($scope.dashboard);
        console.log($scope.allService);
    	$state.go('dashboardStep6');
    }
    /*
    $scope.saveDashboard = function() {
        var selectedCats = new Array();
        for(let c of $scope.allService){
            var selectedServices = new Array();
            for(let service of c.services){
                if(service.isChosen){
                    service.subServices = new Array();
                    selectedServices.push(service);
                }
            }
            if(selectedServices.length > 0){
                var selectedCat = {};
                selectedCat.name = c.name;
                selectedCat.id = c.id;
                selectedCat.services = selectedServices;
                selectedCats.push(selectedCat);
            }
        }
        $scope.dashboard.categoryServiceTree = selectedCats;
    	console.log($scope.dashboard);
    }
    */
    
    $scope.saveDashboard = function() {
        submitOnBoardService.submitOnBoard($scope.dashboard)
        .then(function(resp){
            
        }, function(){
            
        });
        
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
