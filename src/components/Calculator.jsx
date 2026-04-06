import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // basic safety: prevent empty eval
        if (!input) return;
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } 
    else if (value === "C") {
      setInput("");
    } 
    else {
      // reset if previous was error
      setInput((prev) =>
        prev === "Error" ? value : prev + value
      );
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "=",
  ];

  return (
    <div className="card">
      <h3>Calculator</h3>

      <input className="calc-display" value={input} readOnly />

      <div className="calc-grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={
              btn === "="
                ? "equal"
                : btn === "C"
                ? "clear"
                : ""
            }
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}