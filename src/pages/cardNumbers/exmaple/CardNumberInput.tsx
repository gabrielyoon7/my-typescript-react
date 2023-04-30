import React, { useState } from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const CardNumberInput: React.FC<Props> = ({ label, value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const unmaskedValue = inputValue.replace(/[^0-9]/g, "");
    const maskedValue = unmaskedValue.replace(/^(\d{8})(\d{8})?$/, (_, first, second) => {
      return `${first}${second ? "*".repeat(8) : ""}`;
    });
    setDisplayValue(maskedValue);
    onChange(unmaskedValue);
  };

  return (
    <div>
      <label htmlFor="cardNumber">{label}</label>
      <input
        type="tel"
        id="cardNumber"
        value={displayValue}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default CardNumberInput;
