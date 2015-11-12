'use strict';

/**
 * @ngdoc function
 * @name yoyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoyoApp
 */
angular.module('yoyoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['item1', 'item2', 'item3', 'item4'];
  });
