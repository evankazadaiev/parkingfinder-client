import axios from 'axios';

// https://run.mocky.io/v3/a5dc23ee-d174-464c-8c9d-f708e443b6ff

export const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});
