var moviePage = {
    init: function () {
        moviePage.initStyling();
        moviePage.initEvents();
    },
    initStyling: function () {
        console.log("initstyling");
        moviePage.addAllMovies(movies);
    },
    initEvents: function () {

        $("body").on("click", function () {
            alert("bound event");
        })
        console.log("called init events");
    },

    addMovies: function(movie, index, array) {
        $("section").append(
        "<article>" +
        "<h2>" + movie.title + "</h2>"
        + "<p>" + movie.content + "</p>"
        + "<img src='" + movie.photo +"'>"  // <img src='path/to/photo.png'>
        + "</article>"
       );

   },

    addAllMovies: function (moviesData) {
        moviesData.forEach(moviePage.addMovies);
},

};


$(document).ready(function () {

    moviePage.init();

});
