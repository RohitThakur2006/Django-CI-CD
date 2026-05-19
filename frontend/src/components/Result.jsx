import {useState, useMemo} from 'react'

const Result = ({students}) => {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 1)
  }

  const totalMarks = useMemo(()  => {
    console.log("Calculating total marks")
    let total = 0
    for (let i=0; i<students.length; i++) {
        total += students[i].marks
    }
    return total
  }, [students]);
  return (
    <>
        <h3>Counter: {counter}</h3>
        <h3>Total Marks: {totalMarks}</h3>
        <button onClick={handleClick}>
            Increase counter
        </button>
    </>
  )
}

export default Result