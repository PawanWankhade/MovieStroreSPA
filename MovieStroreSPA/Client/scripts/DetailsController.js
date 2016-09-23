app.controller("DetailsController", function ($scope,$http,$routeParams) {

    var id = $routeParams.id;

    $http.get("/api/movie/" + id).success(function (data) {
        $scope.movie = data;
    });
    
     $scope.Edit = function (m) {

        $scope.edit = {
            movie:
        {
            Title: "",
            RunTime: 0,
            ReleaseYear: new Date().getFullYear()
        }
        };
        $scope.edit.movie = angular.copy(m);
    };
});
