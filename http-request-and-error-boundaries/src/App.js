import { PokemonForm } from "./utils/pokemon";
import { ErrorBoundary } from "react-error-boundary";
import PokemonInfo from "./components/PokemonInfo";
import ErrorFallback from "./components/ErrorFallback";
import { useState } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  function handleReset() {
    setPokemonName("");
  }
  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleReset}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
