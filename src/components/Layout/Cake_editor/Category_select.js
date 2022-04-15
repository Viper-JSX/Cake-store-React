function CategorySelect({ category/*="cake"*/, handleCategoryChange }){
    return(
        <select value={category} onChange={handleCategoryChange}>
            <option value="cake">Category</option>
            <option value="cake">Cake</option>
            <option value="cupcake">Cupcake</option>
        </select>
    );
}

export default CategorySelect;