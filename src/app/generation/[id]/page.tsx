import { fetchGeneration, fetchPokemons } from "@/app/actions";
import { PokemonCard } from "@/components/PokemonCard";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
  searchParams?: { type?: string; query?: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Geração ${params.id}`,
  };
}

export async function generateStaticParams() {
  const { generation } = await fetchGeneration();

  return generation.map((e) => ({
    id: String(e.id),
  }));
}

export default async function GenerationPage({ params, searchParams }: Props) {
  const id = Number(params.id);
  const type = searchParams?.type || "";
  const query = searchParams?.query || "";

  const { pokemon } = await fetchPokemons(id, type, query);

  if (id > 9) {
    notFound();
  }

  return (
    <section className="container py-4 pt-32 md:pt-20">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(198px,1fr))] gap-3">
        {pokemon?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {pokemon?.length === 0 && (
        <h2 className="text-2xl font-bold">Resultado não encontrado.</h2>
      )}
    </section>
  );
}
