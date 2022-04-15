import { useState } from "react";
import { useSelector } from "react-redux";

function WhatsNewWindow({ userName, handleAddPost }){
    const [ postText, setPostText ] = useState("");
    const theme = useSelector((state) => state.theme.themeName);
    const handlePostChange = (event) => {
        setPostText(event.target.value);
    }

    return(
        <>
            <hr />
            <div id="whatsNewWidow" className={theme}>
                <b>What's new {userName}?</b>
                <br />
                <textarea col="10" row="60" placeholder="What's new" onChange={handlePostChange}></textarea>
                <br />
                <button id="createPostbutton" className="standardButton" onClick={() => handleAddPost(postText)}>Post</button>
            </div>
        </>
    );
}

export default WhatsNewWindow;