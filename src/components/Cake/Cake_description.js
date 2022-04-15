import { useSelector } from "react-redux";

function CakeDescription({ title, description, price }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div className={`cakeDescriptionWindow ${theme}`}>
            <b className="cakeTitle">{title}</b>
            <p className="cakeDescription" >{description}</p>
            <b className="cakePrice">Price: {price}$</b>
        </div>
    );
}

export default CakeDescription;