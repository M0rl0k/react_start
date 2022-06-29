import axios from "axios";

let axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getPosts = (id) => axiosInstanse.get('/users' + id +'/posts');

export  default getPosts;