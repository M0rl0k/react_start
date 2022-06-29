import axios from "axios";

let axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getUsers = () => axiosInstanse.get('/users');

export  default getUsers;