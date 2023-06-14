import useFetch from "./hooks/useFetch";

function UseFetch() {
  const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  if (isLoading) {
    return new Promise((resolve, reject) => {
    })
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default UseFetch;

