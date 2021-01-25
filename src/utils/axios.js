import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://apiecommerce.huesoft.net/api/'
});

export default instance;
