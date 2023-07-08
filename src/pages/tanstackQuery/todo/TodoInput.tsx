import {useRef} from "react";

function TodoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue && inputValue.length > 0) {
      //   mutation으로 할 일 등록하는 기능 구현
    } else {
      alert("1글자 이상 입력해야 저장됩니다.");
    }
  };

  return (
    <div>
      <div>할 일을 입력하세요</div>
      <input type="text" ref={inputRef}/>
      <button type="submit" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

export default TodoInput;
