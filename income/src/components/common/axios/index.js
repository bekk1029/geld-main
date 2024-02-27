import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:3005/",
  headers: {
    "Content-Type": "application/json",
  },
});
