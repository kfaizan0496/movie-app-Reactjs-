// {
//     type:'ADD_MOVIES'
//     movies:[m1,m2,m3]
// }

 export const ADD_MOVIES='ADD_MOVIES';
 export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';
 export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
 export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
 export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
 export const ADD_MOVIE_TO_SEARCH='ADD_MOVIE_TO_SEARCH';





// action creater
 export function addMovies(movies){
  return   {
        type: ADD_MOVIES,
        movies 
      }
 }

 export function addFavourites(movie){
  return   {
        type :ADD_TO_FAVOURITES, 
        movie 
      }
 }
 export function removeFromFavourites(movie){
  return   {
        type :REMOVE_FROM_FAVOURITES, 
        movie 
      }
 }

 export function setShowFavourites(val){
  return   {
        type :SET_SHOW_FAVOURITES, 
        val 
      }
 }
 
 export function addMovieToList(movie){
  return   {
        type :ADD_MOVIE_TO_LIST, 
        movie 
      }
 }

 export function handleMovieSearch(title){
  console.log(title);
  const url=`http://www.omdbapi.com/?apikey=6440a370&t=${title}`;

//  http://www.omdbapi.com/?i=tt3896198&apikey=6440a370
  return function(dispatch){
  fetch(url)
   .then(response=> response.json())
   .then(movie=>{
    console.log('movie',movie)
    dispatch(addMovieToSearch(movie))
  });
 
  
  }

 }

 export function addMovieToSearch(movie){
  return   {
        type :ADD_MOVIE_TO_SEARCH, 
        movie 
      }
 }