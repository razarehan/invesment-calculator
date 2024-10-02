import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 15
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput=> {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  const isInputValid = userInput.duration >= 1;
  return <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {isInputValid && <Results userInput={userInput}/>}
    {!isInputValid && <p className="center">Input Invalid</p>}
  </>
}

export default App
