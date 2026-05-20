import {useState} from 'react'

const useCounter = (initialValue=0) => {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(c=>c+1) //inline function to increment the value
  const decrement = () => {
    if (count>0) {
        setCount(count-1)
    }      
  }
  const reset = () => setCount(initialValue)
  return [count, increment, decrement, reset]
}

export default useCounter