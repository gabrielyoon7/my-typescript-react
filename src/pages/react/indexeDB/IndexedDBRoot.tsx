import React, {useEffect, useState} from "react";
import IndexedDBUtil, {MyData} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  useEffect(() => {
    const dbUtil = new IndexedDBUtil('myDB', 1);

    dbUtil.open()
      .then(() => {
        const data: MyData = {id: 1, name: 'John Doe'};
        return dbUtil.addData(data);
      })
      .then(() => {
        console.log('Data added successfully');
        dbUtil.close();
      })
      .catch((error) => {
        console.error('Error:', error);
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
