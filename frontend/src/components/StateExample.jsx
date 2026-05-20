import {useState} from 'react'

const StateExample = () => {
  const [num, setNum] = useState(0)
  console.log(num)
  const handleClick = () => {
    setNum(num + 1)
  }

  const handleReset = () => {
    setNum(0)
  }

  return (
    <>
        <h3>Number is: {num}</h3>
        <button onClick={handleClick}>
            Click to Change
        </button>
        <br></br>
        <button onClick={handleReset}>
            Reset
        </button>
    </>
    
  )
}

export default StateExample