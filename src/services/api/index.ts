import axios from 'axios';

const API_URL = process.env.API_URL;
const TOKEN = process.env.TOKEN;

export const apiClient = async () => {
  const instance = axios.create({ baseURL: API_URL });

  instance.interceptors.request.use(async (request: any) => {
    if (TOKEN) {
      request.headers.Authorization = `Bearer ${TOKEN}`;
    }

    return request;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      if (error?.response?.data) {
        return await Promise.reject(error.response.data);
      }
      return await Promise.reject(error.message);
    }
  );

  return instance;
};


export default apiClient;
