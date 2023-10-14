import React, {useEffect} from "react";
import IndexedDBUtil, {MyData} from "./IndexedDBUtil.ts";

function IndexedDBRoot() {
  useEffect(() => {
    const dbUtil = new IndexedDBUtil('myDB', 1);

    dbUtil.open()
      .then(() => {
        const data: MyData = {id: 1, name: 'John Doe'};
        return dbUtil.addData(data);
      });

  }, []);

  return (
    <div>
      <div>IndexedDB</div>
    </div>
  );
}

export default IndexedDBRoot;
