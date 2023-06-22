import {useQuery} from "@tanstack/react-query";

function TanstackQueryBasic() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  });

  if (isLoading) return <>{'Loading...'}</>;

  if (error) return <>{'An error has occurred: ' + JSON.stringify(error)}</>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default TanstackQueryBasic;
