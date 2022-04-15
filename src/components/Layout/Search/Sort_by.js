import { useSelector } from "react-redux";

function SortBy({ handleSortingCriteriaChange }){
    const sortBy = useSelector((state) => state.search.SortBy);
    
    return(
        <div id="sortBySearch">
            <select value={sortBy} onChange={handleSortingCriteriaChange}>
                <option value="most_popular">Most popular</option>
                <option value="expensive_first">Expensive</option>
                <option value="cheap_first">Cheap firts</option>
            </select>
        </div>
    );
}

export default SortBy;