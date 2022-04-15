import { Outlet } from "react-router";
import { useSelector } from 'react-redux';
import CakeOpener from "../../Cake/Cake_opener";
import OpenCakeEditor from "./Open_cake_editor";


function Store(){
    const user = useSelector((state) => state.user);
    const cakes = useSelector((state) => state.cakeStore.cakesToDisplay)
    const theme = useSelector((state) => state.theme.themeName)

    return(
        <div id="store" className={theme}>
            {/*<Outlet />*/}
            
            <div id="storeCakeOpeners" className={theme}>
                {
                    cakes.map((cake, index) => {
                        return (<CakeOpener cake={cake} imageURL={cake.imageURL} key={cake.title} />);
                    })
                }
            </div>
            
            {user?.status == "admin" ? <OpenCakeEditor /> : null}
        </div>
    );

}

export default Store;