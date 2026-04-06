import { useState } from "react";

export function Factorial() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    let n = Number(num);
    if (isNaN(n) || n < 0) return setResult("Invalid input");

    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;

    setResult(fact);
  };

  return (
    <div className="card">
      <h3>Factorial</h3>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}