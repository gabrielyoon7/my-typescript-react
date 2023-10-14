import React, {useEffect} from "react";
import IndexedDBUtil, {IndexedDBDataType} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  useEffect(() => {
    const dbUtil = new IndexedDBUtil('myDB', 1);

    dbUtil.open()
      .then(() => {
        const data: IndexedDBDataType<string> = { id: 1, data: 'John Doe' };
        dbUtil.addData('myData', data);
      })
      .then(() => {
        console.log('Data added successfully to myData');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        dbUtil.close();
      });

    dbUtil.open()
      .then(() => {
        const data: IndexedDBDataType<number> = { id: 1, data: 2 };
        dbUtil.addData('otherData', data);
      })
      .then(() => {
        console.log('Data added successfully to otherData');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        dbUtil.close();
      });

  }, []);

  return (
    <div>
      <div>IndexedDB</div>
    </div>
  );
}

export default IndexedDBRoot;
