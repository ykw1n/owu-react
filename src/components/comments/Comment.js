
export default function Comment({commentData}){

    return(
            <div className="card mb-3 col-md-8">
                <div className="card-header">
                    Post id: {commentData.postId}  ||  User id: {commentData.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">name: {commentData.name}</h5>
                    <p className="card-text">email: {commentData.email}</p>
                    <p className="card-text">text: {commentData.body}</p>
                </div>
            </div>
    )
}