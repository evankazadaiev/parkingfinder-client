import axios from 'axios';

// https://run.mocky.io/v3/a5dc23ee-d174-464c-8c9d-f708e443b6ff

const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000';

export const http = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});
