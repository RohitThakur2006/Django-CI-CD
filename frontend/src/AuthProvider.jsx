import { createContext, useState, useEffect } from "react"
import axiosInstance from "./axiosInstance"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Send API request
        await axiosInstance.get("/dashboard-protected/")
        setIsLoggedIn(true)
      } catch(error) {
        setIsLoggedIn(false)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (loading) {
    return <div>Loading....</div>
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}