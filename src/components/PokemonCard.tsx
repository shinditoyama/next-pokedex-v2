import { getColor } from "@/lib/colors";
import { IMAGE_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface Props {
  pokemon: IPokemonAttributes;
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <Card
        className="relative w-full rounded-md shadow-lg p-3 hover:-translate-y-2 transition-all"
        style={{
          background: `linear-gradient(0deg, #fafafa, ${getColor(
            pokemon.types[0].type.id
          )})`,
        }}
      >
        <Badge variant="secondary" className="absolute">
          {pokemon.id}
        </Badge>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`${IMAGE_URL}${pokemon.id.toString().padStart(3, "0")}.png`}
            alt={pokemon.name}
            width={140}
            height={140}
            priority
            className="rounded-xl object-cover"
          />
          <h2 className="text-xl font-bold line-clamp-1 capitalize">
            {pokemon.name}
          </h2>
          <div className="flex justify-around gap-2 mt-2 capitalize">
            {pokemon.types?.map((t) => (
              <Badge
                key={t.type.id}
                variant="outline"
                style={{ backgroundColor: getColor(t.type.id) }}
              >
                {t.type.name}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
