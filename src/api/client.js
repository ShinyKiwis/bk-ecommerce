import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://bk-ecom-be.onrender.com/api',
})

export default apiClient;