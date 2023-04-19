import React, { useState } from "react";
import CardNumberInput from "./CardNumberInput";

const Example: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);
  };

  return (
    <div>
      <div>{cardNumber}</div>
      <CardNumberInput
        label="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
    </div>
  );
};

export default Example;
