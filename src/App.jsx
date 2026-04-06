import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { AddNumbers } from "./components/add";
import { Calculator } from "./components/calculator";
import { VowelConsonantClass } from "./components/class";
import { Factorial } from "./components/factorial";
import { StringReverse } from "./components/StringReversal";
import { SumOfDigits } from "./components/SumofDigits";
import { VowelConsonantFunctional } from "./components/vowel";
import { VotingApp } from "./components/Voting";
import { Prac1, Prac2, PropExample, Compare, Counter } from "./components/prac";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddNumbers />} />
          <Route path="/voting" element={<VotingApp />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/vowel" element={<VowelConsonantFunctional />} />
          <Route path="/factorial" element={<Factorial />} />
          <Route path="/string" element={<StringReverse />} />
          <Route path="/sumofdigits" element={<SumOfDigits />} />
          <Route path="/prac1" element={<Prac1 />} />
          <Route path="/prac2" element={<Prac2 />} />
          <Route path="/props" element={<PropExample name="Gryffin" />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
