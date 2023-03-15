import { create } from "zustand";
import { fetcher, API_BASE } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

// This is the data that comes from the API
const mockData = [
  {
    id: "4f30cde6-6ca0-49ad-8958-5a40ba7c26c0",
    createdAt: "2023-03-05T21:55:34.182Z",
    name: "Second tile",
    belongsToId: "220f9e1f-b9a6-4c95-9807-8351c57657eb",
    order: 2,
  },
  {
    id: "50103166-a740-4435-b290-1e0589eca28d",
    createdAt: "2023-03-05T21:55:38.224Z",
    name: "Third tile",
    belongsToId: "220f9e1f-b9a6-4c95-9807-8351c57657eb",
    order: 3,
  },
  {
    id: "0806d77b-a621-4957-83bf-1b56ec795c8b",
    createdAt: "2023-03-05T21:55:22.959Z",
    name: "First tile edit",
    belongsToId: "220f9e1f-b9a6-4c95-9807-8351c57657eb",
    order: 1,
  },
];

const useTileStore = create((set) => ({
  tiles: [],
  error: {},
  isLoading: false,
  fetch: async () => {
    const data = await fetcher(`${API_BASE}/tiles`);

    // const { isLoading, error, data } = useQuery({
    //   queryKey: ["tiles"],
    //   queryFn: () => fetcher(`${API_BASE}/tiles`),
    // });

    // set({ tiles: data, error, isLoading });
    set({ tiles: data });
  },
  reorder: (newOrder) => set({ tiles: newOrder }),
}));

export default useTileStore;
