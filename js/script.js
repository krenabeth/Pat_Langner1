var app = angular.module('routingModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/'),
	{
		templateUrl: 'index.html',
		controller: 'routeCtrl'	
	}
	.when ('/shows',
	{
		templateUrl: '/shows.html',
		controller: 'routeCtrl'
	})
	.when ('/about',
	{
		templateUrl: 'about.html',
		controller: 'routeCtrl'   
	})
	.when ('/shop',
	{
		templateUrl: 'shop.html',
		controller: 'routeCtrl'   
	})
	.when ('/gallery',
	{
		templateUrl: 'gallery.html',
		controller: 'routeCtrl'   
	})
	.otherwise({ redirectTo: '/'})
});