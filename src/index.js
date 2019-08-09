import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

// Setting a default url for all our axios requests
// Extras e.g. /posts will be concatenated to the baseURL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// Setting Headers
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'

// Setting headers for a specific type of request
axios.defaults.headers.post['Content-Type'] = 'application/json'

// Will affect all requests sent from anywhere in the app
axios.interceptors.request.use(request => {
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

axios.interceptors.response.use(response => {
    // console.log(response)
    // Edit the response config
    return response
}, error => {
    // console.log(error)
    //To forward the errors to our responses
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
