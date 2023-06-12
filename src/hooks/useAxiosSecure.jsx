import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://gear-up-sports-academy-server.vercel.app'
})

const useAxiosSecure = () => {
    return [axiosSecure];
};

export default useAxiosSecure;