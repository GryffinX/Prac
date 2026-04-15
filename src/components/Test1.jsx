import React, { Component } from "react";

export class Test1 extends Component {
  calculateFactorial = (num) => {
    if (num < 0 || isNaN(num)) return null;

    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  };

  render() {
    const { name, number } = this.props;

    const num = Number(number);

    if (number === "" || isNaN(num)) {
      return (
        <div className="card">
          <header>
            <h2>Welcome {name.toUpperCase()}</h2>
          </header>
          <p>Invalid number</p>
        </div>
      );
    }

    const square = num * num;
    const cube = num * num * num;
    const factorial = this.calculateFactorial(num);

    return (
      <div className="card">
        <header>
          <h2>Welcome {name.toUpperCase()}</h2>
        </header>

        <main>
          <p>Square: {square}</p>
          <p>Cube: {cube}</p>
        </main>

        <footer>
          <p>Factorial: {factorial}</p>
        </footer>
      </div>
    );
  }
}