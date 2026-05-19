import { useState, useEffect } from 'react'

const CounterUseEffect = () => {
  const [count, setCount] = useState(0)
  const [randomNumber, setRandomNumber] = useState(0)

  useEffect( () => {
    // Side effect code here
    console.log("Inside useEffect")

    // Cleanup function
    return () => {
      console.log("Cleanup function call")
    }
  }, [count])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1000)
    // console.log("Random Number: ", randomNum)
    setRandomNumber(randomNum)
  }

  return (
    <>
        <h2 className='text-light'>Count: {count}</h2>
        <button onClick={increaseCount}>Increase Count</button>
        <hr />
        <h2 className='text-light'>Random number: {randomNumber}</h2>
        <button onClick={generateRandomNumber}>Generate random number</button>
    </>
  )
}

export default CounterUseEffect