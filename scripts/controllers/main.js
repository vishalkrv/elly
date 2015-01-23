'use strict';

/**
 * @ngdoc function
 * @name ellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ellyApp
 */
angular.module('ellyApp')
  .controller('MainCtrl',[ '$scope', '$location', function (scope, $location) {
    
  	scope.main = {
  		redirect:function(){
  			$location.url('/analytics');
  		}
  	};

  }]);
