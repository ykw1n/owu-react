import User from "./User";


export default function Users({data, fnShowUserPosts,userPosts}) {

    console.log(data)
    console.log(fnShowUserPosts)

    return(
        <div>
            {
                data &&  data.map((val, index) => <User key={index} userPosts={userPosts} userData={val} showUserPosts={fnShowUserPosts}/>)
            }
        </div>
    )
}