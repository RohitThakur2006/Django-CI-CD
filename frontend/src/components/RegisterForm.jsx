import {useState} from 'react'

const RegisterForm = () => {
  const [formData, setFormData] = useState({name: '', email: ''})

  const handleData = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // this prevents page refresh
    console.log(formData)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" type="text" value={formData.name} onChange={handleData}/>
            <input name="email" placeholder="Email" type="text" value={formData.email} onChange={handleData}/>
            <button type='submit'>Register</button>
        </form>
    </>
  )
}

export default RegisterForm