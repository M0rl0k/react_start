import axios from "axios";

let axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

const getPosts = (id) => axiosInstanse.get(`/${id}/posts`);

export  default getPosts;