import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 3000,
	headers: {},
});

export default axiosInstance;
