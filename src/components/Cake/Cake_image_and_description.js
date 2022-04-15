import CakeDescription from "./Cake_description";
import CakeImage from "./Cake_image";

function CakeImageAndDescription({ imageURL, title, description, price }){
    console.log(imageURL)
    return(
        <div className="cakeImageAndDescription">
            <CakeImage imageURL={imageURL} />
            <CakeDescription title={title} description={description} price={price} />
        </div>
    );
}

export default CakeImageAndDescription;