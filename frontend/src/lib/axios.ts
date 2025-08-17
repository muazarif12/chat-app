import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: (import.meta as any).env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials:true,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})