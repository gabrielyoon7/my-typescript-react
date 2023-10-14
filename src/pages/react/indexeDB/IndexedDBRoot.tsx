import {useEffect} from "react";

function IndexedDBRoot() {
  useEffect(() => {
    if (!('indexedDB' in window)) {
      console.log('IndexedDB를 지원하지 않는 브라우저입니다.');
    }
  }, []);

  return (
    <div>
      IndexedDB
    </div>
  );
}

export default IndexedDBRoot;
