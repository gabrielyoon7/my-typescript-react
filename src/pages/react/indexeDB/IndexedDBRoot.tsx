import React from "react";
import IndexedDBUtil, {IndexedDBDataType} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  const dbUtil = new IndexedDBUtil('myDB', 1);

  const addRandomStringArrayData = () => {
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

  const addRandomStringSingleData = () => {
    dbUtil.open().then(() => {
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const newData: IndexedDBDataType<string, string> = { id: randomString, data: randomString };

      return dbUtil.addData('myData', newData);
    }).then(()=>{
      alert('데이터 추가 성공!');
    }).then(() => {
      dbUtil.close();
    });
  };

  const removeAllData = () => {
    dbUtil.open().then(() => {
      return dbUtil.removeAllData('myData');
    }).then(() => {
      alert('모든 데이터가 삭제되었습니다!');
    }).then(() => {
      dbUtil.close();
    });
  };

  const getAllData = () => {
    dbUtil.open().then(() => {
      return dbUtil.getAllData('myData');
    }).then((data) => {
      alert(`데이터 개수: ${data.length}`);
    }).then(() => {
      dbUtil.close();
    });
  };


  return (
    <div>
      <div>IndexedDB</div>
      <button onClick={addRandomStringArrayData}>add random string array data</button>
      <button onClick={addRandomStringSingleData}>add random string single data</button>
      <button onClick={removeAllData}>remove all data</button>
      <button onClick={getAllData}>get all data</button>
    </div>
  );
}

export default IndexedDBRoot;
