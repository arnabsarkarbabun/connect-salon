'use strict';

/**
 * @ngdoc overview
 * @name connectUiApp
 * @description
 * # connectUiApp
 *
 * Main module of the application.
 */
angular
  .module('connectUiApp', ['ui.router', 'jkuri.timepicker', 'ngCookies'])
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
    // HOME STATES AND NESTED VIEWS ========================================
    .state('/login', {
      url: '/login',
      views: {
            'content': {
                templateUrl: '/views/login.html',
                controller: 'loginCtrl' 
            }
        }
    })
    .state('/signup', {
      url: '/signup',
      views: {
            'content': {
                templateUrl: '/views/signup.html',
                controller: 'loginCtrl' 
            }
        }
    }) 
    .state('/forgotpwd', {
      url: '/forgotpwd',
      views: {
            'content': {
                templateUrl: '/views/forgot_pwd.html',
                controller: 'loginCtrl' 
            }
        }
    })

    //onboardingdStep
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('dashboardStep1', {
      url: '/dashboardStep1',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-1.html'
            }
        }
    })  
    .state('dashboardStep2', {
      url: '/dashboardStep2',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-2.html'
            }
        }
    })  
    .state('dashboardStep3', {
      url: '/dashboardStep3',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-3.html'
            }
        }
    }) 
    .state('dashboardStep4', {
      url: '/dashboardStep4',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-4.html'
            }
        }
    }) 
    .state('dashboardStep5', {
      url: '/dashboardStep5',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-5.html'
            }
        }
    }) 
    .state('dashboardStep6', {
      url: '/dashboardStep6',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'dashboardcontent': {
                templateUrl: '/views/dashboard-step-6.html'
            }
        }
    })
    .state('createClient', {
      url: '/createClient',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/create_client.html',
                controller : 'createClientCtrl'
            }
        }
    })   
    .state('profileAvailability', {
      url: '/profileAvailability',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/connect_profile_availability.html',
                controller : 'createClientCtrl'
            }
        }
    })  
    .state('managePhotos', {
      url: '/managePhotos',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/connect_profile_manage_photos.html',
                controller : 'createClientCtrl'
            }
        }
    })  
    .state('clientCommunication', {
      url: '/clientCommunication',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/connect_settings_client_communication.html',
                controller : 'createClientCtrl'
            }
        }
    })
    .state('appointmentSettings', {
      url: '/appointmentSettings',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/connect_settings_appointment_settings.html',
                controller : 'createClientCtrl'
            }
        }
    })      
    .state('profileView', {
      url: '/profileView',
      views: {
            'header': {
                templateUrl: '/views/nav.html'
            },
            'content': {
                templateUrl: '/views/connect_profile_view.html',
                controller : 'createClientCtrl'
            }
        }
    })  
});

