import Post from "./Post";

function UserPosts({ posts }){
    console.log("Posts: ", posts)
    return(
        <div className="userPosts">
            <b>Posts: </b>
            {
                posts.map((post) => 
                    <Post post={post} />
                )
            }
        </div>
    );
}

export default UserPosts;