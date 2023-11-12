import {Dispatch, SetStateAction} from "react";

interface KeypadProps {
  numbers: number[];
  setNumbers: Dispatch<SetStateAction<number[]>>;
  maxLength: number;
}

function Keypad({numbers, setNumbers, maxLength}: KeypadProps) {

  const keypadNumbers = [...Array(10)].map((_, index) => index);
  const randomNumbers: (number | string)[] = [...keypadNumbers].sort(() => Math.random() - 0.5);
  randomNumbers.splice(10 - 1, 0, 'clear');
  randomNumbers.splice(10 + 1, 0, 'delete');

  const handleClickNumberButton = (number: number) => {
    if (maxLength !== numbers.length) {
      setNumbers((prevNumbers) => [...prevNumbers, number]);
    }
  };

  const handleClickDeleteButton = () => {
    if (numbers.length !== 0) {
      setNumbers((prevNumbers) => prevNumbers.slice(0, prevNumbers.length - 1));
    }
  };

  const handleClickClearButton = () => {
    if (numbers.length !== 0) {
      setNumbers([]);
    }
  };

  return (
    <div className="container">
      {randomNumbers.map((value) => (
        <button
          key={value}
          className="item"
          onClick={() => {
            if (typeof value === 'number') {
              handleClickNumberButton(value);
            } else if (value === 'clear') {
              handleClickClearButton();
            } else if (value === 'delete') {
              handleClickDeleteButton();
            }
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
