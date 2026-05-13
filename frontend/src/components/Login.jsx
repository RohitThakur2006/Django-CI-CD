import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import AuthProvider, { AuthContext } from '../AuthProvider'
import API_BASE_URL from '../api/config'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userData = {
      username, password
    }
    console.log("Login info: ", userData)

    try {
        // POST request to django backend
        await axios.post(`${API_BASE_URL}/api/v1/login/`, userData, {withCredentials:true})
        console.log("Login successful")
        setIsLoggedIn(true)
        navigate('/dashboard') // Navigate to Dashboard page
        setErrors({})
        setSuccess(true)
    } catch(error) {
        setErrors(error.response.data)
        console.log("Some error occurred while login: ", error.response.data)
    } finally {
        setLoading(false)
    }
  }

  return (
    <>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light-dark p-5 rounded">
                    <h3 className='text-light text-center mb-4'>Login to your Account</h3>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='mb-3'>
                            {errors.detail && <div className='text-danger'>{errors.detail}</div>}
                        </div>
                        
                        {success && <div className='alert alert-success text-center'>Login Successful</div>}

                        {loading ? (
                            <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please Wait...</button>
                        ) : (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login