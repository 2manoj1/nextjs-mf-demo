import { useMemo } from "react";
import { useGetPokemonByNameQuery } from "@/redux/apiServices/pokemonApi";
import { useRouter } from "next/router";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Loading from "@/components/common/Loading";
import ErrorMsg from "@/components/common/ErrorMsg";
import PokemonDetails from "@/components/PokemonDetails";

const PokemonDetailsPage = () => {
  const { query } = useRouter();
  const name = useMemo(() => {
    if (typeof query?.name === "string") return query?.name;
    else if (!query?.name && query?.slug) {
      return query?.slug[1];
    }
  }, [query]);

  const { data, isLoading, isError } = useGetPokemonByNameQuery(
    name ?? skipToken
  );
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorMsg />;
  }
  console.log(data);
  if (data) {
    return <PokemonDetails data={data} />;
  }
  return null;
};

export default PokemonDetailsPage;
