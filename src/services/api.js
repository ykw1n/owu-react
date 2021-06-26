import axios from "axios";
// let axInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})
//
// const getUsers = () => {return axInstance.get('/users')};
// const getUser = (id) => {return axInstance.get('/users/' + id)};
//
// export {getUsers, getUser};

// let ax  = axios.create({baseURL : 'https://ww.com'})
// ax.get('/test');
// const getUsers = () => ax.get('/test')
// const getIser = (id) => {return ax.get('/test' + id)}

// let option = {
//     baseURL: 'https://jsonplaceholder.typicode.com'
// }
//
// let inst = axios.create(option)

let options = {baseURL: 'https://jsonplaceholder.typicode.com'}
let axInstance = axios.create(options)
const getUsers = () => axInstance.get('/users')
const getUser = (id) => axInstance.get('/users/' + id)

export {getUsers, getUser}