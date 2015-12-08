'use strict';

/**
 * @ngdoc function
 * @name ngDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngDashboardApp
 */
angular.module('ngDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
