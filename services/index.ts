import { ACCESS_TOKEN, BASE_URL } from "@/constants";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    console.log(config);
    console.log(config.headers);
    return config;
  },
  (error) => {
    return error;
  }
);

export default instance;
