const PokemonDetails = ({ data }: any) => {
  return (
    <div>
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
    </div>
  );
};

export default PokemonDetails;
