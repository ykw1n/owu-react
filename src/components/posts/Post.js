export default function Post({posts}) {
    const {userId, id, title, body} = posts
    return (<div>
        <hr/>
        <div className="card-header">Post title: {title}<p># {id}</p></div>
        <div className="card-body">
            <p>userId: {userId}</p>
            <p>body: {body}</p>
        </div>
    </div>)
}