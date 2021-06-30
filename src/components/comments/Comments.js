import Comment from "./Comment";

export default function Comments({data}) {

    return(
        <div>
            {data && data.slice(0,10).map((val, index) => <Comment key={index}  commentData={val}/>)}
        </div>
    )
}