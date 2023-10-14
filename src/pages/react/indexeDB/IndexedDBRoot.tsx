import React, {useEffect} from "react";
import IndexedDBUtil, {MyData} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  useEffect(() => {
    const dbUtil = new IndexedDBUtil('myDB', 1);

    dbUtil.open()
      .then(() => {
        const data: MyData = { id: 1, name: 'John Doe' };
        return dbUtil.addData('myData', data);
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
        const data: MyData = { id: 1, name: 'Gabriel Yoon' };
        return dbUtil.addData('otherData', data);
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
