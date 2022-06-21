function DeletePost({ post, handlePostDelete }){
    return(
        <div className="postDeleteButton" onClick={() => handlePostDelete(post)}>
            delete
        </div>
    );
}

export default DeletePost;