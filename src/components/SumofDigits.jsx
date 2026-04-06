import { useState } from "react";

export function SumOfDigits() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (isNaN(num)) return setResult("Invalid input");

    const sum = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);

    setResult(sum);
  };

  return (
    <div className="card">
      <h3>Sum of Digits</h3>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}