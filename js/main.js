"use strict";
$(document).ready(function () {
    //jQuery ajax req.
    //https://pokeapi.co/api/v2/pokemon/{id or name}/
    $.get('https://pokeapi.co/api/v2/pokemon', {
        // Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60.
        //what data are you getting?
        limit: 12
    }).done(function (data) {
        //do this with the data
        console.log(data);
        data.results.forEach((value, index, array)=>{
            console.log(value.name);
        let theSpan = document.getElementById('information01');
        theSpan.insertAdjacentHTML("afterbegin", ` ${value.name} `);
        });

    }).fail(function (jqXhr, status, error) {
        console.log(jqXhr, 'is jqxhr');
        console.log(status, 'is status');
        console.log(error, 'is error');
    });

});