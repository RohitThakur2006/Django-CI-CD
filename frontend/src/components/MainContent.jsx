import { Link } from "react-router-dom"

const MainContent = () => {
  return (
    <div className='container'>
        <div className='p-5 text-center'>
            <h1 className='text-light'>Learning Management System</h1>
            <p className='text-light'>With LMS, you can design learning that feels intuitive, supports diverse learners, and evolves with your goals.</p>
            <Link to="/dashboard">
              <button className='btn btn-primary'>Dashboard</button>
            </Link>
        </div>
    </div>
  )
}

export default MainContent