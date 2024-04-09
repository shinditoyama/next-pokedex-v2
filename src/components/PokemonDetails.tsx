import { getColor } from "@/lib/colors";
import { IMAGE_URL } from "@/lib/constants";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Props {
  pokemon: IPokemonAttributes[];
  species: ISpecie[];
  nextPokemon?: IPokemonAttributes[];
  prevPokemon?: IPokemonAttributes[];
}

export function PokemonDetails({
  pokemon,
  species,
  nextPokemon,
  prevPokemon,
}: Props) {
  return (
    <Card className="shadow-lg w-full h-full">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-md">
        <div
          className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden lg:border-r"
          style={{
            background: `radial-gradient(#fafafa, 40%, ${pokemon[0]?.pokemon_species.color.name})`,
          }}
        >
          <div className="absolute flex w-full flex-row items-center justify-between p-6 z-20">
            {prevPokemon && (
              <Link href={`/pokemon/${prevPokemon[0]?.name}`}>
                {prevPokemon?.length !== 0 && (
                  <MoveLeft className="text-4xl font-light opacity-80 transition-colors duration-150 hover:text-secondary" />
                )}
              </Link>
            )}
            {nextPokemon && (
              <Link href={`/pokemon/${nextPokemon[0]?.name}`}>
                {nextPokemon?.length !== 0 && (
                  <MoveRight className="text-4xl font-light opacity-80 transition-colors duration-150 hover:text-secondary" />
                )}
              </Link>
            )}
          </div>
          <div className="relative flex items-center justify-center lg:h-full">
            <Image
              src={`${IMAGE_URL}${pokemon[0]?.id
                .toString()
                .padStart(3, "0")}.png`}
              alt={pokemon[0]?.name}
              width={340}
              height={340}
              priority
              className="object-cover"
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-99px)]">
          <div className="p-6 space-y-2 border-b">
            <p className="select-none text-4xl font-bold tracking-wide">
              {`#${pokemon[0]?.id.toString().padStart(3, "0")}`}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold uppercase">
              {pokemon[0]?.name}
            </h1>
            <div className="space-x-2">
              {pokemon[0]?.types.map((t) => (
                <Badge
                  key={t.type.id}
                  style={{ backgroundColor: getColor(t.type.id) }}
                >
                  {t.type.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-b">
            <div className="grid grid-cols-3 text-center h-20 bg-secondary">
              <div className="flex flex-col justify-center border-r">
                <span className="font-semibold">Weight</span>
                <p>{pokemon[0]?.weight / 10} kg</p>
              </div>
              <div className="flex flex-col justify-center border-r">
                <span className="font-semibold">Height</span>
                <p>{pokemon[0]?.height / 10} m</p>
              </div>
              <div className="flex flex-col justify-center px-2">
                <span className="font-semibold">Specie</span>
                <p className="line-clamp-2">
                  {species
                    .filter((_, index) => index == 8)
                    .map((spec) => spec.genus)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border-b">
            <div className="w-full overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Status</TableHead>
                    <TableHead className="text-left">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pokemon[0]?.stats.map((s, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">
                        {s.stat.name}
                      </TableCell>
                      <TableCell className="text-left">{s.base_stat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-3 p-6">
            {pokemon[0]?.pokemon_species?.evolutionchain?.pokemon?.map((el) => (
              <Link
                key={el.id}
                href={`/pokemon/${el.name}`}
                className="border-2 rounded-full overflow-hidden hover:-translate-y-2 transition-all"
              >
                <Image
                  src={`${IMAGE_URL}${el.id.toString().padStart(3, "0")}.png`}
                  alt={el.name}
                  width={140}
                  height={140}
                  className="scale-90"
                />
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
