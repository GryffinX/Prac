import { useState } from "react";

export function StringReverse() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const reverse = () => {
    setResult(text.split("").reverse().join(""));
  };

  return (
    <div className="card">
      <h3>Reverse String</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reverse}>Reverse</button>
      <p>{result}</p>
    </div>
  );
}