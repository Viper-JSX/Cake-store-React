import { useSelector } from "react-redux";

function SearchTypeSwitcher({ handleSearchTypeChange }){
    const searchType = useSelector((state) => state.search.searchType);

    return(
        <div id="searchTypeSwitch">
            <div className={searchType === "text_search" ? "active" : "disabled"} onClick={() => handleSearchTypeChange("text_search")}>Text</div>
            <div className={searchType === "category_search" ? "active" : "disabled"} onClick={() => handleSearchTypeChange("category_search")}>Category</div>
        </div>
    );
}

export default SearchTypeSwitcher;