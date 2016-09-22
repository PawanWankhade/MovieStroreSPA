app.controller("DetailsController", function ($scope,$http,$routeParams) {

    var id = $routeParams.id;

    $http.get("/api/movie/" + id).success(function (data) {
        $scope.movie = data;
    });
});