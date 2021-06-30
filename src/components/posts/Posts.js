import Post from "./Post";
export default function Posts({data, postComments, fnShowPostComments}) {

    return(
        <div>
            {data &&  data.map((val, index) => <Post key={index} postComments={postComments} postData={val} showPostComments={fnShowPostComments}/>)}
        </div>
    )
}