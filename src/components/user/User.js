export default function User({item, appRoot}){
    return(
        <div>
            {item.id} - {item.name}
            <button onClick={() => appRoot(item.id) }>click</button>
        </div>
    );
}