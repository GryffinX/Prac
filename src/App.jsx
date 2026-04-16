import './App.css';

import Header_learn from "./components/header";
import MainLearn from "./components/main";
import FooterLearn from "./components/footer";

import Test from "./components/Test";
import Num, {
  UserProfile,
  Product,
  HobbiesList,
  CarDetails,
  DiscountMessage
} from "./components/num";

import { Counter2, Calc } from './components/classComp';

function App() {
  return (
    <>
      <Header_learn />

      <Test />
      <Num number={5} />

      <UserProfile name="Gryffin" age={21} city="Chennai" />

      <Product name="Laptop" price={50000} category="Electronics" />
      <Product name="Shoes" price={2000} category="Fashion" />
      <Product name="Book" price={500} category="Education" />

      <HobbiesList hobbies={["Reading", "Gaming", "Coding"]} />

      <CarDetails car={{ brand: "Toyota", model: "Camry", year: 2022 }} />

      <DiscountMessage productName="Laptop" discount={15} />
      <DiscountMessage productName="Book" discount={5} />

      <Counter2 />
      <Calc value="Hello from Props!" />

      <FooterLearn />
    </>
  );
}

export default App;