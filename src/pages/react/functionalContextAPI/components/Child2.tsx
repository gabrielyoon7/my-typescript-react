import React, {useContext} from "react";
import {GlobalContext} from "../provider/GlobalProvider.tsx";

const Child2: React.FC = () => {
  const globalState = useContext(GlobalContext);
  return (
    <div>
      ------- 자식(뎁스2)
      <div>
        <div>
          -------------- value1 : {JSON.stringify(globalState.value1)}
          <button onClick={() => globalState.setValue1(!globalState.value1)}>불리안 업데이트</button>
        </div>
        <div>
          -------------- value2:{globalState.value2}
          <button onClick={() => globalState.setValue2('바이')}>문자열 업데이트</button>
        </div>
      </div>
    </div>
  );
};

export default Child2;
