function Post({ post }){
    console.log(post)
    return(
        <div className="post">
            <p>{post.text}</p>
            <span>{post.date.toLocaleString()}</span>
        </div>
    );
}

export default Post;