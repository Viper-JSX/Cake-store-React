function ImageInput({ handleCakeImageChange, handleImageInputClick }){
    return(
        <label className="cakeImageInput imageSelectInput">
            <span className="icon">&#9999;</span>
            <input type="file" placeholder="Select image" onChange={handleCakeImageChange} onClick={handleImageInputClick}/>
        </label>
    );
}

export default ImageInput;