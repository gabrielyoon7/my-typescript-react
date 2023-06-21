import Table from './Table';
import { useState } from "react";

function DynamicTableRoot() {
  const [data, setData] = useState([]);
  const [lastURL, setLastURL] = useState('');

  const generateRandomDataURL = () => {
    const randomURLs = [
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/comments',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/users',
    ];
    const randomNumber = Math.floor(Math.random() * randomURLs.length - 1);
    const newURL = randomURLs[randomNumber];
    setLastURL(newURL);
    return newURL;
  };

  const handleClickButton = async () => {
    const response = await fetch(generateRandomDataURL());
    const newData = await response.json();
    setData(newData);
  };

  return (
    <>
      <div>DynamicTableRoot</div>
      <div>마지막으로 요청한 URL: {lastURL}</div>
      <button onClick={handleClickButton}>새로운 데이터 넣어보기</button>
      <Table data={data} rowsPerPage={10} />
    </>
  );
}

export default DynamicTableRoot;
