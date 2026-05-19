import useCounter from '../hooks/useCounter'

const MyCounter = () => {
    const [count, increment, descrement, reset] = useCounter(5)
  return (
    <>
        <p>{count}</p>
        {/* button to increment */}
        <button onClick={increment}>+</button>
        <button onClick={descrement}>-</button>
        <button onClick={reset}>?</button>
    </>
  )
}

export default MyCounter