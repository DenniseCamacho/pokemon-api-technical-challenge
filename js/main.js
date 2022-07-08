"use strict";
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEMON_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export


let showData = {
    doShowData: (data) => {
        data.forEach((results, index, array) => {
            let theName = results.name;
            // let url = results.url;
            let element = document.getElementById('information01');
            // fetchMeThenLog(url);
            {
                element.insertAdjacentHTML('beforeend', `
           <div class="divExerciseCSS2js">
           <img src="${POKEMON_IMAGE_URL}${index + 1}.png" alt="An image of the pokemon, ${theName}">
           ${theName}
           </div>
           `)
            }
        });

    }
}


fetch(POKEMON_URL).then(function (response) {
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



