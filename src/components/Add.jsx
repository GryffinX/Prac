import { useState } from "react";

export function AddNumbers() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
      setError("Enter valid numbers");
      setResult(null);
      return;
    }
    setError("");
    setResult(Number(a) + Number(b));
  };

  return (
    <div className="card">
      <h3>Add Numbers</h3>
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="A" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="B" />
      <button onClick={handleAdd}>Add</button>

      {error && <p>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}