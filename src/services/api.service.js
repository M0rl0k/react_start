const baseURL = 'https://jsonplaceholder.typicode.com/';

const getComments = () => fetch(baseURL+'comments');
const getTodos = () => fetch(baseURL+'todos');
const getAlbums = () => fetch(baseURL+'albums');
const getCurrentPost = (id) => fetch(baseURL+`posts/${id}`)

export {getTodos, getComments, getAlbums, getCurrentPost};