import { fetchGraphQL } from "@/lib/fetch";

export async function fetchPokemons(
  id: number,
  type: string,
  name: string
): Promise<IPokemon> {
  return fetchGraphQL(`
    query {
      pokemon: pokemon_v2_pokemon(
        where: {
          pokemon_v2_pokemonspecy: {
            generation_id: { _eq: ${id} }
            name: { _regex: "${name}" }
          }
          is_default: { _eq: true }
          pokemon_v2_pokemontypes: {
            pokemon_v2_type: { name: { _regex: "${type}" } }
          }
        }
        order_by: { id: asc }
      ) {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            id
            name
          }
        }
      }
    }
  `);
}

export async function fetchPokemonById(id: number): Promise<IPokemon> {
  return fetchGraphQL(`
    query {
      pokemon: pokemon_v2_pokemon(where: { id: { _eq: ${id} } }) {
        id
        name
      }
    }
  `);
}

export async function fetchPokemonByName(name: string): Promise<IPokemon> {
  return fetchGraphQL(`
    query {
      pokemon: pokemon_v2_pokemon(where: { name: { _eq: "${name}" } }) {
        id
        name
        height
        weight
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            id
            name
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          stat: pokemon_v2_stat {
            name
          }
        }
        pokemon_species: pokemon_v2_pokemonspecy {
          color: pokemon_v2_pokemoncolor {
            name
          }
          evolutionchain: pokemon_v2_evolutionchain {
            pokemon: pokemon_v2_pokemonspecies(order_by: { order: asc }) {
              id
              name
            }
          }
          specie: pokemon_v2_pokemonspeciesnames {
            genus
          }
        }
      }
    }
  `);
}

export async function fetchGeneration(): Promise<IGeneration> {
  return fetchGraphQL(`
    query {
      generation: pokemon_v2_generation {
        id
        name
      }
    }
  `);
}

export async function fetchType(): Promise<IType> {
  return fetchGraphQL(`
    query {
      type: pokemon_v2_type(limit: 18) {
        id
        name
      }
    }
  `);
}

/*export async function fetchAll(): Promise<IPokemon> {
  return fetchGraphQL(`
    query {
      pokemon: pokemon_v2_pokemon(limit: 1020) {
        id
        name
      }
    }
  `);
}*/
