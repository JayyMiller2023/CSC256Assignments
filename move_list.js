// When the page loads, set up an empty array of movies
let arrMovies = [];

// this function will take the user input and add it to the movies array
function addMovie() {
    // nickname / shortcut to the movie name input
    let txtMovie = document.getElementById("txtMovie");

    // set up a variable to hold the movie title and trim any extra spaces
    let movieTitle = txtMovie.value.trim();
            
    // if this is true, then the user gave us a movie title
    if (movieTitle) {
    // add the new movie to the end of the array
    arrMovies.push(movieTitle);
    // clear the text input
    txtMovie.value = "";

    // call the function to show the movies
    showMovies();

    }
 }

// function to show the movies in the div in the HTML
function showMovies() {
    // set up a shortcut to the div that will show our movies
    let divMovieList = document.getElementById("divMovieList");
    // sort the movies alphabetically
    arrMovies.sort();

    // add the movies as a string to the div
    divMovieList.innerHTML = arrMovies.join("<br>");
}

// function to remove movies from the list
function resetMovieList() {
    // reset the array to an empty array
    arrMovies = [];

    // update the div on the page
    showMovies();
}