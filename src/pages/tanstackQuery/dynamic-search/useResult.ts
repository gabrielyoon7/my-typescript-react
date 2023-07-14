import {useQuery} from "@tanstack/react-query";
import axios from "axios";

async function fetchTodos(): Promise<string[]> {
  const res = await axios.get('/todos');
  return res.data;
}

export const useResult = () => {
  return useQuery({
    queryKey: ["dynamic-search-result"],
    queryFn: fetchTodos
  });
};
