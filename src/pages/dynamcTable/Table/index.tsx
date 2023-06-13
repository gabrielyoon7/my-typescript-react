// @/src/components/Table/index.tsx
import React, {useState} from "react";
import useTable from "./hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

interface TableProps {
  data: any; // 수정이 필요한 부분
  rowsPerPage: number;
}

const Table: React.FC<TableProps> = ({data, rowsPerPage}) => {
  const [page, setPage] = useState<number>(1);
  const {slice, range} = useTable(data, page, rowsPerPage);

  return (
    <>
      {
        data.length > 0
          ? (
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
              <TableFooter
                range={range}
                slice={slice}
                page={page}
                setPage={setPage}
              />
            </>
          )
          : (
            <>
              <div>데이터가 없습니다.</div>
            </>
          )
      }
    </>
  );
};

export default Table;
