import { useState } from "react";

export function VowelConsonantFunctional() {
  const [text, setText] = useState("");
  const [counts, setCounts] = useState({ vowels: 0, consonants: 0 });

  const calculate = () => {
    let vowels = 0;
    let consonants = 0;
    const str = text.toLowerCase();

    for (let char of str) {
      if ("aeiou".includes(char)) vowels++;
      else if (char >= "a" && char <= "z") consonants++;
    }

    setCounts({ vowels, consonants });
  };

  return (
    <div className="card">
      <h3>Functional</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={calculate}>Count</button>
      <p>Vowels: {counts.vowels}</p>
      <p>Consonants: {counts.consonants}</p>
    </div>
  );
}   