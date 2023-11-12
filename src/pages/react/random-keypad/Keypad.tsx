import {Dispatch, SetStateAction} from "react";

interface KeypadProps {
  numbers: number[];
  setNumbers: Dispatch<SetStateAction<number[]>>;
  maxLength: number;
}

function Keypad({numbers, setNumbers, maxLength}: KeypadProps) {

  const keypadNumbers = [...Array(10)].map((_, index) => index);
  const randomNumbers = [...keypadNumbers].sort(() => Math.random() - 0.5);

  const handleClick = (number: number) => {
    if (maxLength === numbers.length) {
      return;
    }
    setNumbers((prevNumbers) => [...prevNumbers, number]);
  };

  return (
    <div className="container">
      {randomNumbers.map((value) => (
        <button
          key={value}
          className="item"
          onClick={() => handleClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
