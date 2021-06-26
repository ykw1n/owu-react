import User from "./User";

export default function Users({item, appFn}){

    return(
        <div>
            {item.map(val => <User item={val} appRoot={appFn} key={val.id}/>)}
        </div>
    )
}