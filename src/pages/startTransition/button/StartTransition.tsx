import { useState, startTransition } from "react";

const StartTransition = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(`count: ${count}`);
    /**
     * startTransition 으로 감싸거나 그렇지 않을 때
     * 증가 버튼을 연타하는 경우 결과가 다르게 나옴
     *  */
    startTransition(() => {
      console.log(`try to setCount : ${count}`);
      setCount(count + 1);
    });
    // 딜레이 유발
    for (let i = 0; i < 1000000000; i++) { }
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>카운트 증가</button>
    </div>
  );
};

export default StartTransition;
