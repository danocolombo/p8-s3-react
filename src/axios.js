import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;