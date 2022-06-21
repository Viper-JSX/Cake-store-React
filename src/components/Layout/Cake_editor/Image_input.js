import { useSelector } from "react-redux";

function ImageInput({ imageURL, handleCakeImageChange, handleImageInputClick }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <label className={`cakeImageInput imageSelectInput ${theme}`}>
            <span className="icon">&#9999;</span>
            <input type="file" placeholder="Select image" onChange={handleCakeImageChange} onClick={handleImageInputClick}/>
        </label>
    );
}

export default ImageInput;