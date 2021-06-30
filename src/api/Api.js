import axios from "axios";

const option = {baseURL: "https://jsonplaceholder.typicode.com/"}
const axiosInst = axios.create(option)

const getUsers = () => axiosInst('/users');
const getPosts = () => axiosInst('/posts');
const getComments = () => axiosInst('/comments');


export {getUsers,getPosts,getComments}