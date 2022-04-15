import ImageInput from "./Image_input";

function ImageForm({ cakeImage, handleImageInputClick, handleCakeImageChange }){
    return(
        <div id="cakeImageForm" className="imageInput">
            <ImageInput handleCakeImageChange={handleCakeImageChange} handleImageInputClick={handleImageInputClick} />
            <br />
            <span>Preview: </span>
            <br />
            <img id="cakeImagePreview" src={cakeImage} alt="Cake-image" />
        </div>
    );
}

export default ImageForm;