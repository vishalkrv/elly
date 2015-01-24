'use strict';

/**
 * @ngdoc function
 * @name ellyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ellyApp
 */
angular.module('ellyApp')
  .controller('MainCtrl',[ '$scope', '$location','$http', function (scope, $location, $http) {
    
  	scope.main = {
  		list:[],
  		redirect:function(entityId){
  			$location.url('/analytics?entityId='+entityId);
  		}
  	};

  	$http.get('sampleData/entityList.json')
  	.success(function(response){
  		scope.main.list = response;
  	}).error(function(response){
  		console.error(response);
  	});

  }]);
