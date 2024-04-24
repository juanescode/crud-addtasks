import axios from './axios'

export const registerRequest = user => axios.post(`/register`, user);

export const LoginRequest = user =>  axios.post(`/login`, user);

export const verityTokenRequet = () => axios.get('/verify')
