// public/scripts/app.js

(function() {

    'use strict';

    angular
        .module('authApp', ['ui.router', 'satellizer', 'toastr'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = '/api/authenticate';

            // Redirect to the auth state if any other states
            // are requested other than users
         //   $urlRouterProvider.otherwise('/auth');

            /**
             * Helper auth functions
             */
            var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.reject();
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }];

            var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.resolve();
                } else {
                    $location.path('/login');
                }
                return deferred.promise;
            }];


            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HomeController',
                    templateUrl: '../views/home.html'
                })
                .state('auth', {
                    url: '/auth',
                    templateUrl: '../views/authView.html',
                    controller: 'AuthController as auth'

                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: '../views/signup.html',
                    controller: 'SignupController',
                    //resolve: {
                 //       skipIfLoggedIn: skipIfLoggedIn
                  //  }
                })


                .state('users', {
                    url: '/users',
                    templateUrl: '../views/userView.html',
                    controller: 'UserController as user'
                });
        });
})();