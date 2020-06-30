import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-a-pizza.firebaseio.com/'
});

export default instance;