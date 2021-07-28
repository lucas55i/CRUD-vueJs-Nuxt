import axios from 'axios';

const client = axios.create({
    baseURL: process.env.apiUrl
})

export default client