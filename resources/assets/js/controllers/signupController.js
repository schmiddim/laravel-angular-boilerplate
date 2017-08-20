(function () {

    'use strict';

    angular
        .module('authApp')
        .controller('SignupController', SignupController);

    function SignupController($scope, $location, $auth) {
        $scope.signup = function () {
            $auth.signup($scope.user)
                .then(function (response) {
                    $auth.setToken(response);
                    $location.path('/');
                    console.log('You have successfully created a new account and have been signed-in');
                })
                .catch(function (response) {
                    console.log(response.data.message);
                });
        };
    }

})();