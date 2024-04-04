import axios from 'axios';
import {APIKEY} from "../utils/constants";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.SERVER_API_URL;

const setUpAxiosInterceptors = () => {
    const onRequestSuccess = config => {        
        config.headers.apikey = `${APIKEY}`;
        return config;
    };

    const onResponseSuccess = response => response;
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess);
};

export default setUpAxiosInterceptors;