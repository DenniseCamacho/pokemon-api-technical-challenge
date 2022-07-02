function searchPokemonNames(search) {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    let endPoint = '/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search))
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            // return data.features[0].center;
            // return console.log(data.features[0].center);
        });
}
