import { useRef, useState } from "react";


const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '●'.repeat(number.length - 8);
  const numberArrays = securedCreditNumber.match(/.{1,4}/g) ?? [];
  return numberArrays.map((n) => n.split(''));
};

function CustomPassword() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [maskedPassword, setMaskedPassword] = useState('');
  const [rawPassword, setRawPassword] = useState('');

  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCardNumber = event.target.value.replace(/\D/g, '');
    if (newCreditCardNumber.length > 16) return;

    const markedNumber = convertSecuredCreditCard(newCreditCardNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join('')).join(' - ');

    setMaskedPassword(markedNumber);
    setRawPassword(newCreditCardNumber);
  };

  return (
    <div>
      <h1>커스텀 패스워드</h1>
      <div>
        ↓ 표시용 패스워드
      </div>
      <div>
        <input
          value={maskedPassword}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        />
      </div>
      <div>
        <input
          ref={inputRef}
          value={rawPassword}
          onChange={handleChangeCreditCardNumber}
        />
      </div>
      <div>
        ↑ 진짜 패스워드
      </div>
    </div>
  );
}
export default CustomPassword;
