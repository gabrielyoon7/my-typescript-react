import Table from './Table';
import posts from './posts.json';

function DynamicTableRoot() {
  return (
    <>
      <div>DynamicTableRoot</div>
      <Table data={posts} rowsPerPage={10} />
    </>
  )
}

export default DynamicTableRoot