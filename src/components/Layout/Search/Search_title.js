import { useSelector } from 'react-redux';

function SearchTitle(){
    const theme = useSelector((state) => state.theme.themeName);
    
    return(
        <div id="searchTitle" className={theme}>
            <span>Products</span>
        </div>
    );
}

export default SearchTitle;