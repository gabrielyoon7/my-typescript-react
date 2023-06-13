// @/src/components/Table/TableFooter/index.tsx
import React, {useEffect} from "react";

import styles from "./TableFooter.module.css";

interface TableFooterProps {
  range: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: Record<string, unknown>[];
}

function TableFooter({range, setPage, page, slice}: TableFooterProps) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  let temp = range;
  if (range.length > 6) {
    let start = page - 3;
    let end = page + 3;
    if (start <= 0) {
      start = 0;
    }
    if (end >= range.length) {
      end = range.length;
    }
    temp = temp.slice(start, end);
  }

  return (
    <div className={styles.tableFooter}>
      {temp.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

export default TableFooter;
