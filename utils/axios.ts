import Axios from "axios";
import Cookies from "js-cookie";

const access_token = Cookies.get("access_token");

const headers: any = {
    "X-Requested-With": "XMLHttpRequest",
};

if (access_token) headers["Authorization"] = `Bearer ${access_token}`;

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers,
    withCredentials: true,
});

const onFulfilled = (response: any) => {
    return response;
};

const onRejected = (error: any) => {
    return Promise.reject(error);
};

axios.interceptors.response.use(onFulfilled, onRejected);

export default axios;
