import {useState} from 'react'

const LoginForm = () => {
  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault() // this prevents page refresh
    alert(`Welcome ${name}`)
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default LoginForm