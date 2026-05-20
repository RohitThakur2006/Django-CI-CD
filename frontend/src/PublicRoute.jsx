import { AuthContext } from "./AuthProvider"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

const PublicRoute = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashboard/' />
  )
}

export default PublicRoute