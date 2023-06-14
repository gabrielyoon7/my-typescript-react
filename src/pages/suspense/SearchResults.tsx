import {useEffect, useState} from "react";
import {Photo} from "../../types/common.ts";

export default function SearchResults({query}: { query: string }) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const updatePhotos = async (q: string) => {
    try {
      const response = await fetch(`/photos?query=${q}`);
      const data = await response.json();
      setPhotos(data);
    } catch (err) {
      throw new Error();
    }
  };

  useEffect(() => {
    updatePhotos(query);
  }, [query]);

  if (query === "") {
    return null;
  }

  if (photos.length === 0) {
    throw updatePhotos(query); // Throw the promise to trigger suspense
  }

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>{photo.title}</li>
      ))}
    </ul>
  );
}
