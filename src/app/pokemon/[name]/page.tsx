import { fetchPokemonById, fetchPokemonByName } from "@/app/actions";
import { PokemonDetails } from "@/components/PokemonDetails";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: params.name,
  };
}

/*export async function generateStaticParams() {
  const { pokemon } = await fetchAll();

  return pokemon.map((e) => ({
    name: String(e.name),
  }));
}*/

export default async function PokemonPage({ params }: Props) {
  const { name } = params;
  const { pokemon } = await fetchPokemonByName(name);

  if (pokemon.length === 0) {
    notFound();
  }

  const { pokemon: nextPokemon } = await fetchPokemonById(pokemon[0]?.id + 1);
  const { pokemon: prevPokemon } = await fetchPokemonById(pokemon[0]?.id - 1);

  const species = pokemon[0].pokemon_species.specie;

  return (
    <section className="flex items-center justify-center container py-4 pt-32 md:pt-20">
      <PokemonDetails
        pokemon={pokemon}
        species={species}
        nextPokemon={nextPokemon}
        prevPokemon={prevPokemon}
      />
    </section>
  );
}
