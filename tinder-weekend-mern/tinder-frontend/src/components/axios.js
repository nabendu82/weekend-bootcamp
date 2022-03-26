import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-mern-backend-weekend.herokuapp.com'
});

export default instance;