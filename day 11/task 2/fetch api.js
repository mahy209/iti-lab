//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=192f0a7664ceb6f4ca03e9d24c3ed735"));
$('#term').focus(function(){
    var full = $("#poster").has("img").length ? true : false;
    if(full == false){
    $('#poster').empty();
    }
});
var getPoster = function(){
    var film = $('#term').val();
    if(film == ''){
        $('#poster').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');
    } else {
        $('#poster').html('<div class="alert"><strong>Loading...</strong></div>');
        $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=192f0a7664ceb6f4ca03e9d24c3ed735&query=" + film + "&callback=?", function(json) {
            if (json != "Nothing found."){                 
console.log(json);
                $('#poster').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
                } else {
                $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=192f0a7664ceb6f4ca03e9d24c3ed735&query=goonies&callback=?", function(json) {
                    
                    console.log(json);
                    $('#poster').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                });
                }
        });
        }
    return false;
}
$('#search').click(getPoster);
$('#term').keyup(function(event){
    if(event.keyCode == 13){
        getPoster();
    }
});