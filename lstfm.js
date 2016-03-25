$(document).ready(function() {

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=prof_hustler&api_key=2f796f77b5018ac3b9f0e10d308ef5f8&limit=2&format=json&callback=?", function(data) {

        var html = ''; // we declare the variable that we'll be using to store our information
        var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += 'Currently listening to: <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
            } // close the if statement
            counter++ // add 1 to the counter variable each time the each loop runs
        }); // close each loop
        $('.listening-to h5').append(html); // print the information to the document - here I look for the h5 tag inside the div with a class of 'listening-to' and use the jQuery append method to insert the information we've stored in the html variable inside the h5 tag.
    }); // close JSON call

}); // close document ready function