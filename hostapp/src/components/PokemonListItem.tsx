import Link from "next/link";

const PokemonListItem = ({ name }: { name: string }) => {
  return (
    <li className="p-3 mb-3 bg-slate-50">
      <Link href={`/pokemon/${name}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default PokemonListItem;
