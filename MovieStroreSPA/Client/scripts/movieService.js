app.factory("movieService",function($scope,movieApiUrl){
  var getAllMovies = function(){
    return $http.get(movieApiUrl);
  };
  
  var getMovieById = function(id){
    return $http.get(movieApiUrl+id);
  };
  
  var updateMovie = function(movie){
    return $http.put(movieApiUrl+movie.Id,movie);
  };
  
  var deleteMovie = function(movie){
    return $http.delete(movieApiUrl+movie.Id,movie);
  };
  
  var insertMovie = function(movie){
    return $http.post(movieApiUrl,movie);
  };
  
  return{
    getAllMovie : getAllMovie,
    getMovieById: getMovieById,
    updateMovie:updateMovie,
    deleteMovie:deleteMovie,
    insertMovie:insertMovie
  };
  
});
