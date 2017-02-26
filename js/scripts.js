/**** Idea 1 ****/

// Think I need a movie class, which would have the fields movieName, movieTime, movieImage.
// With a constructor I could make each movie object a lot faster, and it would be reusable.
// Ideally the movie image would be coming automatically from some api, but in this case I could manually set each movieImage value to the image url..





// Code I was expermenting with..

/*

var movieShowTime1 = $("#showTime1").val();
var movieShowTime2 = $("#showTime2").val();
var movieTitle1 = $("#movieTitle1").val();
var movieTitle2 = $("#movieTitle2").val();

function getUserMovieInfo (movieTime, movieTitle) {
	return {
  movieTitle: movieTitle,
  movieShowTime: movieTime
  };
}

var movieObject = getUserMovieInfo(movieShowTime1, movieTitle1);

alert(movieObject.toString());


// experimenting with some code I found on stack overflow, it's a multideminsional array, that uses objects to store info, then a for loop to cycle through that data appending it to the empty ul id (#topic)..


var pages = [ [ {id:'1',title:'Get Out'} , {id:'2',title:'Collide'} ] , 
              [ {id:'3',title: movieTitle1, showTime: movieShowTime1} , {id:'4',title: movieTitle2, showTime: movieShowTime2} ]
            ];

var currentPage = 1;
function renderNavs() {
     var data = pages[currentPage];
     for(var i=0; i < data.length; i++) {
          $('#topic').append('<li id="' + data[i].id + '">' + "Movie title, " + data[i].title + ". Show Time, "+ data[i].showTime + '</li>');
     }
}

$('#topic').empty();
renderNavs();
*/