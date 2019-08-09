import axios from 'axios'

// creates an instance of axios
// inherits all global setting and overwrites only provided values
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// overwrites authorization header for all requests sent from this instance
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

// Implementing a custom request interceptor
instance.interceptors.request.use(request => {
    // console.log(request)
    // Edit the request config
    return request
}, error => {
    // console.log(error)

    //To forward the errors to our requests
    //This kind of handling only shows errors when a request fails
    //user side
    return Promise.reject(error)
})

export default instance