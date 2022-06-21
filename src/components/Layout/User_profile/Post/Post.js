import DeletePost from "./Delete_post";

function Post({ post, handlePostDelete }){
    let time = post.date.toLocaleTimeString();
    let dd = post.date.getDate();
    let mm = post.date.getMonth() + 1;
    let yyyy = post.date.getFullYear();

    dd = dd <= 10 ? "0" + dd : dd; 
    mm = mm <= 10 ? "0" + mm : mm; 

    return(
        <div className="post">
            <span>{post.text}</span>
            <br />
            <span>Posted {dd + "/" + mm + "/" + yyyy + " at " + time}</span>
            <DeletePost post={post} handlePostDelete={handlePostDelete} />
        </div>
    );
}

export default Post;