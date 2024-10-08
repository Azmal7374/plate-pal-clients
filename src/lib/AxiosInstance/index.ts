import axios from "axios";
import { cookies } from "next/headers";
import envConfig from "@/src/config/envConfig";
import { getAccessToken } from "@/src/services/AuthService";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://recipe-shareing-server.vercel.app/api/v1",
});

// Request Interceptor:
axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Response Interceptor:
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getAccessToken();
      const accessToken = res.data.accessToken;

      config.headers["Authirization"] = `Bearer ${accessToken}`;
      cookies().set("accessToken", accessToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  },
);
