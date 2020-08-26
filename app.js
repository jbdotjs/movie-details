$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=64eee3bb`)
        .then((response) => {
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5> ${movie.Title} </h5>
                        <a onClick='movieSelected("${movie.imdbID}")' class="btn btn-primary" href="#"> Movie Details </a>
                    </div>
                </div>
                `;
            });

            $('#movies').html(output);

        })
        .catch((err) => {
            console.log(err); // remove
        });
}


function movieSelected(id) {
    sessionStorage.setItem('movieID', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {
    let movieID = sessionStorage.getItem('movieID');

    axios.get(`http://www.omdbapi.com/?i=${movieID}&apikey=64eee3bb`)
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster} class='thumbnail'">
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">Genre: ${movie.Genre}</li>
                        <li class="list-group-item">Released: ${movie.Released}</li>
                        <li class="list-group-item">Rated: ${movie.Rated}</li>
                        <li class="list-group-item">Rating: ${movie.imdbRating}</li>
                        <li class="list-group-item">Director: ${movie.Director}</li>
                        <li class="list-group-item">Writer: ${movie.Writer}</li>
                        <li class="list-group-item">Actors: ${movie.Actors}</li>
                    </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="well">
                        <h3>Plot</h3>
                        <p>${movie.Plot}</p>
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                        <a href="index.html" class="btn btn-default">Go back to Search</a>
                    </div>
                </div>
            `;

            $('#movie').html(output)
        })
        .catch((err) => {
            console.log(err);
        });
}
