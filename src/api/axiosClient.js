import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://api.ezfrontend.com/",
    headers: {
        "Content-Type": "application/json",
    },
})

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {config, status, data} = error.response
        if(config.url === '/auth/local/register' && status === 400){
            const errorList = data.data || [];
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            const firstMessage = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessage.message);
        }
        return Promise.reject(error);
    }
)


export default axiosClient;