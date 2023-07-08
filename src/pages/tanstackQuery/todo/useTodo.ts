import {useQuery} from "@tanstack/react-query";

export const useTodo = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('/tanstack-query/todo').then(
        (res) => res.json(),
      ),
  });
};
