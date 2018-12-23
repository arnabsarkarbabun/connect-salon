'use strict';

/**
 * @ngdoc function
 * @name connectUiApp.factory
 * @description
 * # factory
 * Controller of the connectUiApp
 */
angular.module('connectUiApp')
.factory('apiService', function ($http, $q) {
    return {
         doApiCall: function(url, method, params){

            var deferred = $q.defer();
            $http({
                method: method,
                url: url,
                params: params
            }).success(function (response) {
                if (typeof response.data == 'object') {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).error(function (response) {
                deferred.reject(response.data);
            });

            return deferred.promise;
        }
    }
})
.factory('dashboardService', function() {
    return {
      name : 'anonymous'
    };
})
.factory('loginService', function() {
    // login
    // resetPassword
    // signUp
})
.factory('clientComService',['$http', '$rootScope', function($http, $rootScope){
    var service = {};
    var id = $rootScope.globals.currentUser.id || 3; // id has to give
    service.getClientComSettings = function(){
         return $http.post("http://ec2-52-42-246-229.us-west-2.compute.amazonaws.com:8080/abs-web/api/settings/notification/fetch",
                          JSON.stringify({id:id}));
    };
    return service;
}])
.factory('serviceCategoryService',['$http', function($http){
    var service = {};
    service.getAllCategory = function(){
        // return $http.get("http://127.0.0.1:35835/json/services.json");
        return $http.get("http://ec2-52-42-246-229.us-west-2.compute.amazonaws.com:8080/abs-web/api/master/categoryServiceTree");
    };
    return service;
}])
.factory('submitOnBoardService',['$http', function($http){
    var service = {};
    service.submitOnBoard = function(onboard){
        // return $http.get("http://127.0.0.1:35835/json/services.json");
        return $http.post("", JSON.stringify(onboard));
    };
    return service;
}])
;


