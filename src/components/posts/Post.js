import {useState} from "react";
import Posts from "./Posts";
import Comments from "../comments/Comments";

export default function Post({postData,postComments, showPostComments}){
    console.log(postData)
    let [postStatus, setPostStatus] = useState(false)
    return(
        <div>
            <div className="card mb-3 col-md-8">
                <div className="card-header">
                   Post id: {postData.id}  ||  User id: {postData.userId}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{postData.title}</h5>
                    <p className="card-text">{postData.body}</p>
                    <button className="btn btn-primary" onClick={() => {showPostComments(postData.id); setPostStatus(!postStatus) }}>show Comments</button>
                </div>

            </div>
            {((postComments && postStatus) ? <Comments data={postComments}/> : '')}
        </div>
    )
}