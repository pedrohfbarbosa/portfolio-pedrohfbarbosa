import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/pedrohfbarbosa",
  timeout: 5000,
});
