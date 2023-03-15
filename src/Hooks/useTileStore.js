import { create } from "zustand";
import { fetcher, API_BASE } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
const useTileStore = create((set) => ({
  tiles: [],
  error: {},
  isLoading: false,
  fetch: async () => {
    // const data = await fetcher(`${API_BASE}/tiles`);

    const { isLoading, error, data } = useQuery({
      queryKey: ["tiles"],
      queryFn: () => fetcher(`${API_BASE}/tiles`),
    });

    // set({ tiles: data, error, isLoading });
    set({ tiles: data });
  },
  reorder: (newOrder) => set({ tiles: newOrder }),
}));

export default useTileStore;
