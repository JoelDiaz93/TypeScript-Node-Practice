// import { getPokemon } from "./generics/get-pokemon";
// import { Pokemon } from "./interfaces/pokemon";

// getPokemon(4)
//   .then((pokemon) => console.log(pokemon.name))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Fin getPokemon"));

import { Pokemon } from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
charmander.publicApi = 'https://fernando-herrera.com';
console.log( charmander )