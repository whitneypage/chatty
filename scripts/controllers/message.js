'use strict';

angular.module('chattyApp')

  .controller('MessageCtrl', function ($scope, MessageService) {
    	$scope.messages = [];

  
    	MessageService.getMessages().then(function(response) {
    		console.log(response.data);
  			$scope.messages = response.data;
		});
        


    	$scope.addMessage = function() {
    		console.log('Hey!');
    		MessageService.addMessage($scope.newMessage)
    		.then(function(data){
    			console.log(data.data);
                  $scope.messages = data.data;
                  $scope.newMessage = '';
    		});
    	}





 	});
