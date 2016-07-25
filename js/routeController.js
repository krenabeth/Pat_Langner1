var app = angular.module('routingModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: '/',
		controller: 'routeCtrl'	
	})
	.when ('/html/shows',
	{
		templateUrl: 'html/shows.html',
		controller: 'routeCtrl'
	})
	.when ('/html/about',
	{
		templateUrl: 'html/about.html',
		controller: 'routeCtrl'   
	})
	.when ('/html/shop',
	{
		templateUrl: 'html/shop.html',
		controller: 'routeCtrl'   
	})
	.when ('/html/gallery',
	{
		templateUrl: 'html/gallery.html',
		controller: 'routeCtrl'   
	})
	.otherwise({ redirectTo: '/'})
});