let pokemonsData = [];

const getPokemonById = async (id) => {
  // con esta función pedimos los datos de un pokemon a la api
  // pasándole un id (número)
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemonData = await res.json();
  // y al final devolvemos los datos del pokemon con ese id
  return pokemonData;
};

const getAllPokemonsData = async () => {
  // con esta función recorremos 151 números
  for (let id = 1; id <= 151; id++) {
    // pasándole los 151 números a getPokemonById pedimos
    // los datos de 151 pokemons y los vamos metiendo en el array
    const pokemonData = await getPokemonById(id);
    pokemonsData.push(pokemonData)
  }
  paintPokemons(pokemonsData);
};

const detalle = (name) => {
  console.log(name);
}

const paintPokemons = (pokemonsToPaint) => {

  const pokedex = document.querySelector("#pokedex");
  pokedex.innerHTML = '';

  pokemonsToPaint.forEach((pokemon) => {

    const pokemonContainer$$ = document.createElement("div");
    pokemonContainer$$.setAttribute('class', 'cajapokemon');

    pokemonContainer$$.addEventListener('click', () => detalle(pokemon.name));


    let htmltypes = `<div class= "cajatipos">
    `

    for (const type of pokemon.types) {
      htmltypes += `<div class = ${type.type.name}>${type.type.name}</div>`

    }
    htmltypes += `</div>`

    const html = `
            <div class="contentCard"><h2>${pokemon.name}</h2><div>
            <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
            <div><p>ALTURA: ${pokemon.height}</p>
            <p>${htmltypes}</p></div>
        `;


    pokemonContainer$$.innerHTML = html;
    pokedex.appendChild(pokemonContainer$$);

  });
};

getAllPokemonsData();

function filterByName() {
  const toFilter = document.getElementById('searchPokedex').value.toLowerCase().trim();

  const filteredPokemon = pokemonsData.filter(pokemon => pokemon.name.startsWith(toFilter));

  paintPokemons(filteredPokemon);
  console.log(filteredPokemon);
};

/*const filterTypes = pokemonsData.filter((pokemon) {
  const markTypes = null;
  const markTypesTwo = null;

  if (pokemon.type[1] === "types") {
    markTypes = pokemon.type[1].name === type;
  };

  if (pokemon.type[0] === "types") {
    markTypesTwo = pokemon.type[0].name === type;
  };

  return markTypes || markTypesTwo;
});*/


