'use strict';

/**
 * @ngdoc function
 * @name ngDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngDashboardApp
 */
angular.module('ngDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
