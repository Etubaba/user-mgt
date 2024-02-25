import { BASE_URL } from "@/constant";
import { getCookie } from "@/helper/getToken";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (res) => {
  const token = await getCookie();

  res.headers["x-access-token"] = token;
  res.headers.Authorization = `Bearer ${token}`;
  return res;
});
