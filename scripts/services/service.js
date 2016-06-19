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
});


