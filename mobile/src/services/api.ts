import axios from "axios";

const api = axios.create({
    baseURL: "http://IP",
});

export default api;
