import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import useBearStore from "./Hooks/useBearStore";
import useTileStore from "./Hooks/useTileStore";
import useTiles from "./Hooks/useTiles";
import Tile from "./Components/Tile";

const queryClient = new QueryClient();

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  return (
    <div className="border-2 border-dashed border-rose-700">
      <button onClick={increasePopulation}>one up</button>
      <button onClick={decreasePopulation}>one down</button>
    </div>
  );
}

function App() {
  // const { data, error, isLoading } = useTiles();

  const fetchData = useTileStore((state) => state.fetch);
  const tiles = useTileStore((state) => state.tiles);
  useEffect(() => {
    fetchData();
  }, []);

  // console.log({ data: data?.data, error, isLoading });
  console.log({ data: tiles });

  function onDrag() {
    console.log({ onDrag: e });
  }

  function onDrop(e) {
    console.log({ onDrop: e });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="border-2 border-dashed border-rose-700 mt-4 flex">
        {/* {!!data?.data?.length && */}
        {!!tiles.length &&
          data.data.map((tile) => (
            <Tile key={tile.id} onDrag={onDrag} onDroP={onDrop} data={tile} />
          ))}
      </div>
    </QueryClientProvider>
  );
}

export default App;
