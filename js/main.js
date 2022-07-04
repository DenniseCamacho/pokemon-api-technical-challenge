"use strict";
import {pokemonUrl} from "./urls.js";
import {fetchMeThenLog} from "./notes";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export


let showData = {
    doShowData: (data) => {
        data.forEach((results, index, array) => {
           let theName = results.name;
           let url = results.url;
           let element = document.getElementById('information01');
           // fetchMeThenLog(url);
             {
                element.insertAdjacentHTML('beforeend', `
           <div class="divExerciseCSS2js">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png">
           ${theName}
           </div>
           `)
            }
        });

    }
}




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



