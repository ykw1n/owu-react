import './App.css';

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {getUsers,getPosts,getComments} from "./api/Api";
import {useEffect, useState} from "react";

// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post).
//     В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера (а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)

export default function App() {

   let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(r => setUsers([...r.data]))
    },[])


  return(
      <Router>
          <ul>
              <li><Link to={"/"}>Home----></Link></li>
              <li><Link to={"/users"}>to users----></Link></li>
              <li><Link to={"/posts"}>to posts----></Link></li>
              <li><Link to={"/comments"}>to comments----></Link></li>
          </ul>

          <Route path={"/"} exact render={() => {return (<div>HOME</div>)}}/>
          <Route path={"/users"}><Users item={users}/></Route>
          <Route path={"/posts"}><Posts/></Route>
          <Route path={"/comments"}> <Comments/> </Route>
      </Router>
  )


}

