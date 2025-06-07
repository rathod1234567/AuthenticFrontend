import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/auth', 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAxiosInstance = () => {
  return axiosInstance;
};

export default useAxiosInstance;
