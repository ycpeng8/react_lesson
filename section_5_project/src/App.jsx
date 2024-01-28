import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";

const INITIAL_MONEY = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [money, setMoney] = useState(INITIAL_MONEY);

  const inputIsValid = money.duration >=1;

  function handleChange(event, inputiIentifier) {
    setMoney((prevMoney) => {
      return {
        ...prevMoney,
        [inputiIentifier]: +event.target.value
      };
    });
  }

  return (
    <main>
      <Header money={money} handleChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={money}/>}
    </main>
  );
}

export default App;
