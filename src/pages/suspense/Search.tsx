import {Suspense, useState} from 'react';
import SearchResults from "./SearchResults.tsx";

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <>
      <label>
        Search photos:
        <input value={query} onChange={e => setQuery(e.target.value)}/>
      </label>
      <Suspense fallback={<h1>Loading by Suspense...</h1>}>
        <SearchResults query={query}/>
      </Suspense>
    </>
  );
}
