let ALL_RESULTS = [];

const getOnePokemonFromApi = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();

  ALL_RESULTS.push(pokemon);
};

const getAllPokemons = async () => {
  for (let id = 1; id <= 151; id++) {
    await getOnePokemonFromApi(id);
  }
  console.log(ALL_RESULTS);
  paintPokemons(ALL_RESULTS);
};
getAllPokemons();

const detalle = (name) => {
  console.log(name);
}

const paintPokemons = (pokemonsToPaint) => {

  const pokedex$$ = document.querySelector("#pokedex");
  pokedex$$.innerHTML = "";

  pokemonsToPaint.forEach((pokemon) => {

    const pokemonContainer$$ = document.createElement("div");
    pokemonContainer$$.setAttribute('class', 'cajapokemon');

    let htmltypes = `<div class= "cajatipos">
    `

    for (const type of pokemon.types) {
      htmltypes += `<div class = ${type.type.name}>${type.type.name}</div>`

    }
    htmltypes += `</div>`

    const html = `
            <div>${pokemon.name}<div>
            <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
            <div><p>Altura: ${pokemon.height}</p>
            <p>${htmltypes}</p></div>
        `;

    pokemonContainer$$.innerHTML = html;
    pokedex$$.appendChild(pokemonContainer$$)

    const species = document.getElementById('types')
    types.addEventListener('click', () => detalle(pokemon.name));

  });
};


function filterByName() {
  const toFilter = document.getElementById('searchPokedex').value;

  const filteredPokemon = ALL_RESULTS.filter(pokemon => pokemon.name.startsWith(toFilter));

  paintPokemons(filteredPokemon);
  console.log(filterByName);

};



