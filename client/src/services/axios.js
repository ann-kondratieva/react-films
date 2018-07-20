import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-redux-films.herokuapp.com/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default instance;