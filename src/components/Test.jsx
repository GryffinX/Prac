import React from 'react';
import { useState } from 'react';

function Test() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [msg, setMsg] = useState("");

    const handleClick = () => {
        var isLoggedIn = true;
        setMsg(isLoggedIn ? "Welcome back!" : "Please log in.");
    }

    const handleAdd = () => {
        if (!isNaN(a) && !isNaN(b)) {
            setResult(Number(a) + Number(b));
        } else {
            setResult("Please enter valid numbers.");
        }
    }
    
    return (
        <>
        <h1> Shopping List </h1>
        <p id="para">hi</p>
        <button onClick={handleClick}>Click me</button>
        <p>{msg}</p>
        <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        <button onClick={handleAdd}>Add</button>
        <p>Result: {result}</p>
        </>
    );
}

export default Test;