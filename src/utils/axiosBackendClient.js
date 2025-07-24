import axios from "axios";

const axiosBackendClient = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

export default axiosBackendClient;
