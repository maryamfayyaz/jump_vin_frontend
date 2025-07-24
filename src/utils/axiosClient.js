import axios from "axios";

const axiosClient = axios.create({ baseURL: import.meta.env.VITE_VIN_INFO_URL });

export default axiosClient;
