import User from "./User";


export default function Users(props) {
    let {item} = props
// console.log(item)
    return(
        <div >
            {
                item.map((val, index) => <User key={index} userData={val}/>)
            }

        </div>
    )
}