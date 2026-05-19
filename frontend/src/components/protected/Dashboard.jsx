import { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        // Send API request
        const response = await axiosInstance.get("/dashboard-protected/")
        console.log("Response: ", response.data)
        setData(response.data.message)
      } catch(error) {
        console.error("Some error occurred while fetching protected API", error)
      }
    }

    getData()
  }, [])
  return (
    <div className='container'>
        <div className='p-5 text-center'>
            <h1 className='text-light'>Dashboard</h1>
        </div>
        {data ? (
          <div className='text-light mt-4'>
            <pre>{data}</pre>
          </div>
        ) : (
          <p className='text-light'>Loading....</p>
        )}
    </div>
  )
}

export default Dashboard