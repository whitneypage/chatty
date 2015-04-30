'use strict';

angular.module('chattyApp')

  .factory('MessageService', function($http) {
  		var factory = {};

    	factory.getMessages = function() {
    		var url = "http://localhost:9000";
    		return $http ({
    			method: 'GET',
    			url: url
    		})
    	}

    	factory.addMessage = function(msg) {
    		console.log("Why");
    		var url = "http://localhost:9000";
    		return $http ({
    			method: 'POST',
    			url: url,
    			data: {
    				"text": msg
    			}
    		})
    	}
    return factory;

  });
