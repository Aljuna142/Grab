// src/utils/api.js
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // If you need to send cookies
});

export default api;
