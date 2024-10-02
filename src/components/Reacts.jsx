export default function Results({userInput}) {
  return <>
    <p>Initial Investment: {userInput.initialInvestment}</p>
    <p>annual Investment: {userInput.annualInvestment}</p>
    <p>Return: {userInput.expectedReturn}</p>
    <p>Duration: {userInput.duration}</p>
  </>
}