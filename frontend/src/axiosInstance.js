import axios from 'axios'
import API_BASE_URL from './api/config'

const baseURL = `${API_BASE_URL}/api/v1`

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    function(config) {
        // Modify the request here
        console.log("Config ->", config) // config is the request
        return config
    },
    function (error) { // This function recieves an error object
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    function(response) {        
        return response
    },
    async function(error) {
        const originalRequest = error.config // Stores the original request using the config
        if (error.response.status === 401 && !originalRequest._retry 
            && !originalRequest.url.includes("refresh/") && !originalRequest.url.includes("dashboard-protected/")) {
            originalRequest._retry = true
            try {
                await axiosInstance.post('refresh/')
                return axiosInstance(originalRequest) // send the updated request to the API
            } catch(error) {
                // Handle Error
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance