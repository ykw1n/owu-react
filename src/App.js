import './App.css';
import {getUser, getUsers,} from "./services/api";
import {useEffect, useState} from "react";
import Users from "./components/user/Users";


export default function App() {
    // let [users, setUsers] = useState([])
    //
    // useEffect( () => {
    //     getUsers()
    //         .then(value => console.log(setUsers([...value.data]) ))  //spread operator create new arr from old
    //     }, []
    // )
    //
    //
    //
    // return (<div>{users.map(v => v.id)}</div>)
    let [user, setUser] = useState(null)
    let [users, setUsers] = useState([])
    let appFn = (id) => {getUser(id).then(val => setUser(val.data))}

    useEffect(() => {
        getUsers().then(val => setUsers(val.data))
    },[])


  return(
      <div>
          <Users item={users} appFn={appFn}/>
          <div>{user && user.username}</div>
      </div>
  )


}

