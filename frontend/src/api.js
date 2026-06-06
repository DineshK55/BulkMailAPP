import axios from "axios";

const API = axios.create({
  baseURL: "https://bulkmailapp-80cj.onrender.com/api",
});

export default API;