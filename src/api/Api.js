import axios from "axios";

const option = {baseURL: "https://jsonplaceholder.typicode.com/"}
const axiosInst = axios.create(option)

const getUsers = () => axiosInst('/users');
const getPostByUserId = (id) =>axiosInst("/posts?userId=" + id)
const getPosts = () => axiosInst('/posts');
const getComments = () => axiosInst('/comments');
const getCommentsByPostId = (id) => axiosInst('/comments?postId=' + id);


export {getUsers,getPostByUserId, getPosts,getComments,getCommentsByPostId}