import { useSelector } from "react-redux";

function CategorySearch({ handleSearchByCategory }){
    const searchCategory = useSelector((state) => state.search.searchCategory);

    return(
        <div id="categorySearch">
            <select value={searchCategory} onClick={handleSearchByCategory} onChange={handleSearchByCategory} >
                <option value="all">All</option>
                <option value="cake">Cake</option>
                <option value="cupcake">Cupcake</option>
            </select>
        </div>
    );
}

export default CategorySearch;