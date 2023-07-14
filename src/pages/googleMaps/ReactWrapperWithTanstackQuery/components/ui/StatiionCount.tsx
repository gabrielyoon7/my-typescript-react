import {useStations} from '../../query/markerQuery';
import {ReactNode} from 'react';

function TopRightBox({children}: { children: ReactNode }) {
  return (
    <div
      style={{
        zIndex: 99999,
        position: 'fixed',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        padding: 10,
        boxShadow: '1px 1px 2px gray',
      }}>
      {children}
    </div>
  );
}

function StationCount() {
  // react-query
  const {isFetching, ...queryInfo} = useStations();

  if (isFetching) {
    return <TopRightBox>⌛</TopRightBox>;
  }

  return (
    <>
      {queryInfo.isSuccess && (
        <TopRightBox>{queryInfo.data.length}</TopRightBox>
      )}
    </>
  );
}

export default StationCount;
