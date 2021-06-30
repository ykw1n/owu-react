import Posts from "../posts/Posts";
import {useState} from "react";

export default function User({userData,userPosts,showUserPosts}){

    let {address, company} = userData
      let [status, setStatus] =   useState(false)

    return(
        <div>
        <div className="card border-primary mb-3 card-style" >
            <div className="card-header">id: {userData.id}</div>
            <div className="card-body text-primary">
            <div className="card-text">name: {userData.name}</div>
            <div className="card-text">email: {userData.email}</div>
            <div className="card-text">phone: {userData.phone}</div>
            <div className="card-text">adress: {address.street}</div>
            <div className="card-text">company: {company.name}</div>
                <button className="btn btn-primary" onClick={() => {showUserPosts(userData.id); setStatus(!status) }}>show user posts</button>
            </div>

        </div>
            {((userPosts && status) ? <Posts data={userPosts}/> : '')}
        </div>
    )
}