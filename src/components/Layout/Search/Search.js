import { useSelector } from "react-redux";
import CategorySearch from "./Category_search";
import SearchTitle from "./Search_title";
import SearchTypeSwitcher from "./Search_type_switcher";
import SortBy from "./Sort_by";
import TextSearch from "./Text_search";

function Search({ handleSearchTypeChange, handleSearchBySearchTerm, handleSearchByCategory, handleSortingCriteriaChange }){
    const [searchType, theme] = useSelector((state) => [state.search.searchType, state.theme.themeName]);

    return(
        <div id="search" className={theme}>
            <SearchTitle />
            <div id="searchForm" className={theme}>
                <SearchTypeSwitcher handleSearchTypeChange={handleSearchTypeChange} />
                <div id="searchFieldsWrapper" className={theme}>
                    {
                        searchType == "text_search" ? 
                        <TextSearch handleSearchBySearchTerm={handleSearchBySearchTerm}/>
                        :
                        <CategorySearch handleSearchByCategory={handleSearchByCategory} />
                    }
                    <SortBy handleSortingCriteriaChange={handleSortingCriteriaChange} />
                </div>
            </div>
        </div>
    );
}

export default Search;