import ImageInput from "./Image_input";

function ImageForm({ imageURL, handleImageInputClick, handleCakeImageChange }){

    return(
        <div className={`imageInput cakeImageForm`}>
            <ImageInput imageURL={imageURL} handleCakeImageChange={handleCakeImageChange} handleImageInputClick={handleImageInputClick} />
            <br />
            <span>Preview: </span>
            <br />
            <img id="cakeImagePreview" src={imageURL} alt="Cake-image" />
        </div>
    );
}

export default ImageForm;