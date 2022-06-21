import Post from "./Post";

function UserPosts({ posts, handlePostDelete }){
    return(
        <div className="userPosts">
            <b>Posts: </b>
            {
                posts.map((post) => 
                    <Post post={post} handlePostDelete={handlePostDelete}/>
                )
            }
        </div>
    );
}

export default UserPosts;