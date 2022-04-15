import { useSelector } from "react-redux";

function TextSearch({ handleSearchBySearchTerm }){
    const searchTerm = useSelector((state) => state.search.searchTerm);

    return(
        <div>
            <input value={searchTerm} placeholder="Type cake name" onChange={handleSearchBySearchTerm} />
        </div>
    );
}

export default TextSearch;