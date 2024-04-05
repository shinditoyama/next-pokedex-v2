interface IPokemon {
  pokemon: IPokemonAttributes[];
}

interface IPokemonAttributes {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [
    {
      type: { id: number; name: string };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  pokemon_species: {
    color: {
      name: string;
    };
    evolutionchain: {
      pokemon: [{ id: number; name: string }];
    };
    specie: [{ genus: string }];
  };
}

interface IGeneration {
  generation: IGenerationAttributes[];
}

interface IGenerationAttributes {
  id: number;
  name: string;
}

interface IType {
  type: [ITypeAttributes];
}

interface ITypeAttributes {
  id: number;
  name: string;
}
