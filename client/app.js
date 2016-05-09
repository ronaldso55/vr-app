import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular
	.module('vr-app', [
		angularMeteor
	]);

	if (Meteor.isCordova) {
	  angular.element(document).on('deviceready', onReady);
	}
	else {
	  angular.element(document).ready(onReady);
	}

	function onReady() {
	  angular.bootstrap(document, ['vr-app']);
	} 
