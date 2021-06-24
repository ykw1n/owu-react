import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setPosts(res))
    }, [])
    return (
        <div className="card">
            {posts.map(elem => <Post posts={elem}/>)}
        </div>
    )
}