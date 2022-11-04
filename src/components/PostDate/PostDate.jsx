import './PostDate.css'

function PostDate(props) {
    let postDate = props.date.toLocaleString()
    return(
        <div className="postDate">{postDate}</div>
    )   
}

export default PostDate