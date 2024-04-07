import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.16.251.253:3333"
})