import React from "react";
import IndexedDBUtil, {IndexedDBDataType} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  const dbUtil = new IndexedDBUtil('myDB', 1);

  const addRandomStringData = () => {
    dbUtil.open().then(() => {
      const dataToAdd = [];
      for (let i = 0; i < 60000; i++) {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const newData: IndexedDBDataType<string, string> = { id: randomString, data: randomString };
        dataToAdd.push(newData);
      }

      return dbUtil.addMultipleData('myData', dataToAdd);
    }).then(()=>{
      alert('데이터 추가 성공!');
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
