import React from "react";
import useSWR from "swr";
import { API_BASE, fetcher } from "../utils/api";

const useTiles = () => {
  const tiles = useSWR(`${API_BASE}/tiles`, fetcher);

  return tiles;
};

export default useTiles;
