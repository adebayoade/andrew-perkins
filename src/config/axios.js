import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000,
});

export default api;
