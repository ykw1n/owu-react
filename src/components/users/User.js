export default function User({userData: userData}, showUserPosts){
    console.log(userData)
    // let {address, company} = userData
    return(
        <div className="card border-primary mb-3 card-style" >
            <div className="card-header">id: {userData.id}</div>
            <div className="card-body text-primary">
            <div className="card-text">name: {userData.name}</div>
            <div className="card-text">email: {userData.email}</div>
            <div className="card-text">phone: {userData.phone}</div>
            <div className="card-text">adress: {userData.address.street}</div>
            <div className="card-text">company: {userData.company.name}</div>
                <button className="btn btn-primary" onClick={() => {showUserPosts(userData.id)}}>show user posts</button>
            </div>

        </div>
    )
}