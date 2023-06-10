// @/src/components/Table/index.jsx
import React, { useState } from "react";

import useTable from "./hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            {Object.keys(data[0]).map((el) => (<th key={Math.random()} className={styles.tableHeader}>{el}</th>))}
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={Math.random()}>
              {Object.keys(el).map((col) => (<td key={Math.random()} className={styles.tableCell}>{el[col]}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;