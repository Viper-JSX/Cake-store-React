import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CakeImage from "./Cake_image";

function CakeOpener({ cake, imageURL }){
    const [ user, theme ] = useSelector((state) => [ state.user, state.theme.themeName]);


    return(
        <div className={`cakeOpener ${theme}`} onClick={() => window.scrollTo(0, 0) /* To show cake starting from top (Add as an onclick to route);*/}>
            <NavLink className={`cakeOpenerLink ${theme}`} to={cake.title.replace(" ", "-").toLowerCase()}> 
                <CakeImage imageURL={cake.imageURL}/>
                <p>{cake.title}</p>
                <p>{cake.price}$</p>
            </NavLink>
            {
                user?.status == "admin" ? 
                    <NavLink to={cake.title.replace(" ", "-").toLowerCase().concat("/edit")} state={{cake}}><button className="cakeEditButton">Edit</button></NavLink>
                    :
                    null
                }        
        </div>
    );
}

export default CakeOpener;