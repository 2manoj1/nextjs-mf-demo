import PokemonList from "../../components/PokemonList";

const PokemonPage = () => {
  return (
    <div className="flex flex-col m-4">
      <div className="h-5 mb-8">Pokemon List</div>
      <div className="flex-1">
        <PokemonList />
      </div>
    </div>
  );
};

export default PokemonPage;
