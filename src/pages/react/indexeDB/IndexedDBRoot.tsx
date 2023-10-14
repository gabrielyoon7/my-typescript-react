import React from "react";
import IndexedDBUtil, {IndexedDBDataType} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  const dbUtil = new IndexedDBUtil('myDB', 1);

  const addRandomStringData = () => {
    dbUtil.open().then(() => {
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const newData: IndexedDBDataType<string,string> = {id:randomString,data: randomString};
      dbUtil.addData('myData', newData );
    }).then(() => {
      dbUtil.close();
    });
  };

  return (
    <div>
      <div>IndexedDB</div>
      <button onClick={addRandomStringData}>add random string data</button>
      <button>add random number data</button>
    </div>
  );
}

export default IndexedDBRoot;
