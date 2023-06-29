import axios from "axios";

export const api = axios.create({
  baseURL: "https://i-car-sell-web.onrender.com",
  timeout: 9000,
});
