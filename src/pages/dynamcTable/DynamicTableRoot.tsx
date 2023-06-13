import Table from './Table';
import {useState} from "react";

function DynamicTableRoot() {
  const [data, setData] = useState([]);

  return (
    <>
      <div>DynamicTableRoot</div>
      <Table data={data} rowsPerPage={10}/>
    </>
  )
}

export default DynamicTableRoot
