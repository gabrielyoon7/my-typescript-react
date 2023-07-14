import Input from "./Input.tsx";
import Results from "./Results.tsx";

function DynamicSearchRoot() {
  return (
    <div>
      <div>텍스트를 입력하세요</div>
      <Input/>
      <Results/>
    </div>
  );
}

export default DynamicSearchRoot;
