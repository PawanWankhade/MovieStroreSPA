app.controller("ListController",function($scope,$http){

    $http.get("/api/movie").success(function (data) {
        $scope.movies = data;
        //commenting
    });
});