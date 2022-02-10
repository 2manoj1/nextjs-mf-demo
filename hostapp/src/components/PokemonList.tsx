import { useGetListPokemonQuery } from "../redux/apiServices/pokemonApi";
import ErrorMsg from "./common/ErrorMsg";
import Loading from "./common/Loading";
import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  const { data, isLoading, isError } = useGetListPokemonQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorMsg />;
  }
  return (
    <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
      {data?.results?.map((item: any, index: number) => (
        <PokemonListItem key={index} name={item.name} />
      ))}
    </ul>
  );
};

export default PokemonList;
