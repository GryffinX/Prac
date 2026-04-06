import React, { Component, useState } from 'react';

export function Prac1() {
    return (
        <div className="card">
            <h1>This is a Functional Component</h1>
        </div>
    );
}

export class Prac2 extends Component {
    render() {
        return (
            <div className="card">
                <h1>This is a Class Component</h1>
            </div>
        )
    }
}

export function PropExample(props) {
    return (
        <div className="card">
            <h4>Hello {props.name} </h4>
        </div>
    )
}

    export function Compare() {
        const [a, setA] = useState("");
        const [b, setB] = useState("");
        const [result, setResult] = useState("");

        const handleCompare = () => {
            if (isNaN(a) || isNaN(b) || a.trim() === "" || b.trim() === "") {
                setResult("Enter valid numbers");
                return;
            }
            if (Number(a) > Number(b)) {
                setResult("A is greater than B");
            } else if (Number(a) < Number(b)) {
                setResult("B is greater than A");
            } else {
                setResult("A and B are equal");
            }
        }

        return (
            <div className="card">
                <h3>Compare Numbers</h3>
                <input value={a} onChange={(e) => setA(e.target.value)} placeholder="A" />
                <input value={b} onChange={(e) => setB(e.target.value)} placeholder="B" />
                <button onClick={handleCompare}>
                    Compare
                </button>
                {result && <p>Result: {result}</p>}
            </div>
        )
    }

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 2)}>
        +2
      </button>
      <p>{count}</p>
    </div>
  );
}