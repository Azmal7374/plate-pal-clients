
import envConfig from "@/src/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";

export const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
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
      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;

      config.headers["Authirization"] = `Bearer ${accessToken}`;
      cookies().set("accessToken", accessToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  },
);
