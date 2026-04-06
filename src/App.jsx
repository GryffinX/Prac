import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AddNumbers } from "./components/add";
import { Calculator } from "./components/calculator";
import { VowelConsonantClass } from "./components/class";
import { Factorial } from "./components/factorial";
import { StringReverse } from "./components/StringReversal";
import { SumOfDigits } from "./components/SumofDigits";
import { VowelConsonantFunctional } from "./components/vowel";
import { VotingApp } from "./components/Voting";
import { Prac1, Prac2, PropExample } from "./components/prac";

function App() {
  return (
    <div className="app-container">
      <AddNumbers />
      <VotingApp />
      <VowelConsonantFunctional />
      <Factorial />
      <Calculator />
      <StringReverse />
      <SumOfDigits />
      <Prac1 />
      <Prac2 />
      <PropExample name="Gryffin" />
    </div>
  )
}

export default App
