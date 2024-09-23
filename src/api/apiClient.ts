import axios, { AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

const apiClient = async (
  method: "get" | "post" | "put" | "delete",
  reqUrl: string,
  data?: any
) => {
  try {
    const resp = await axiosInstance({
      method,
      url: reqUrl,
      data,
    });
    return resp.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!isAxiosError(error)) return;
    throw error.response?.data;
  }
};

export default apiClient;
