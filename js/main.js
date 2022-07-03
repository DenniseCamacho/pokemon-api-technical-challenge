"use strict";


let showData = {
    doShowData: (data) => {
        data.forEach((results, index, array) => {
           let theName = results.name;
           let url = results.url;
           let element = document.getElementById('information01');
             {
                element.insertAdjacentHTML('beforeend', `
           <div class="divExerciseCSS2">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png">
           ${theName}
           </div>
           `)
            }
        });

    }
}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://pokeapi.co/api/v2/pokemon/ditto

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

fetch(pokemonUrl).then(function (response) {
    return response.json();
}).then(function (data) {
    // console.log(data.results);
    // console.log(data.results[0].name);
    // console.log(data.results[0].url);
    showData.doShowData(data.results);
}).catch(function (jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
});


// function fetchMeThenLog(url) {
//
//     fetch(url).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         // console.log(data.results);
//         // console.log(data.results[0].name);
//         // console.log(data.results[0].url);
//         // showData.doShowData(data.results);
//         console.log(data);
//     }).catch(function (jqXhr, status, error) {
//         console.log(jqXhr);
//         console.log(status);
//         console.log(error);
//     });
// }
// fetchMeThenLog(pokemonUrl);
// fetchMeThenLog('https://pokeapi.co/api/v2/pokemon/1/');
//
//     //jQuery ajax req.
//     //https://pokeapi.co/api/v2/pokemon/{id or name}/
//     $.get('https://pokeapi.co/api/v2/pokemon', {
//         // Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60.
//         //what data are you getting?
//         limit: 12,
//         offset: 34
//     }).done(function (data) {
//         //do this with the data
//         showData.doShowData(data);
//         //     console.log(value.name);
//         // let theSpan = document.getElementById('information01');
//         // theSpan.insertAdjacentHTML("afterbegin", ` ${value.name} `);
//
//     }).fail(function (jqXhr, status, error) {
//         console.log(jqXhr, 'is jqxhr');
//         console.log(status, 'is status');
//         console.log(error, 'is error');
//     });
//
// });