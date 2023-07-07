import {ReactNode, useRef, useState} from "react";

interface ApiKeyCheckerProps {
  render: (apiKey: string) => ReactNode
}

function ApiKeyChecker({render}: ApiKeyCheckerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [apiKey, setApiKey] = useState("");
  const onClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue && inputValue.length > 0) {
      setApiKey(inputValue);
    } else {
      alert("제대로 된 키를 입력하셔야 합니다.");
    }
  };
  return (
    <div>
      <div>
        <div>API키를 입력하세요</div>
        <input type="text" ref={inputRef}/>
        <button type="submit" onClick={onClick}>
          전송
        </button>
      </div>
      <div>
        {
          apiKey.length > 0 && render(apiKey)
        }
      </div>
    </div>
  );
}

export default ApiKeyChecker;
