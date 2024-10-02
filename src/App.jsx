import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Reacts"
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
        [inputIdentifier]: newValue
      }
    });
  }
  return <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results userInput={userInput}/>
  </>
}

export default App
