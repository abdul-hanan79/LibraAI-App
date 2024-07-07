import axios, { InternalAxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocaStorageEnum } from "../types/anum";
// for local development only.
// const prefix = '192.168.10.4'
const prefix = "localhost";
const instance = axios.create({
  baseURL: `http://${prefix}:8000`,
  // baseURL: "https://fyp-backend-nine.vercel.app/",
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem(LocaStorageEnum.ACCESS_TOKEN);
    config.headers.Authorization = token;
    return Promise.resolve(config);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
