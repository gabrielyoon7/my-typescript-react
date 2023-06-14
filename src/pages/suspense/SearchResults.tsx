import {Photo} from "../../types/common.ts";
import useFetch from "./hooks/useFetch.ts";

export default function SearchResults({query}: { query: string }) {
  const {data: photos, isLoading, error} = useFetch<Photo[]>(`/photos?query=${query}`);

  if (photos === null || error !== null) {
    return null;
  }

  if (isLoading) {
    throw new Promise(() => {
    });
  }

  if (photos.length === 0) {
    return <p>No matches for <i>"{query}"</i></p>;
  }

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>{photo.title}</li>
      ))}
    </ul>
  );
}
