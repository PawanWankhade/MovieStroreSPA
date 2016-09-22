var app = angular.module("MovieApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/list",
    { templateUrl: "/Client/views/list.html" })
    .when("/details/:id",
    { templateUrl: "/Client/views/details.html" })
    .otherwise(
    { redirectTo: "/list" });
});
