import React, { Component } from "react";

export class VowelConsonantClass extends Component {
  state = {
    text: "",
    vowels: 0,
    consonants: 0,
  };

  calculate = () => {
    let vowels = 0;
    let consonants = 0;
    const str = this.state.text.toLowerCase();

    for (let char of str) {
      if ("aeiou".includes(char)) vowels++;
      else if (char >= "a" && char <= "z") consonants++;
    }

    this.setState({ vowels, consonants });
  };

  render() {
    return (
      <div className="card">
        <h3>Class</h3>
        <input
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={this.calculate}>Count</button>
        <p>Vowels: {this.state.vowels}</p>
        <p>Consonants: {this.state.consonants}</p>
      </div>
    );
  }
}
