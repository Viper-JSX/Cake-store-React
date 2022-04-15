class Cake{
    constructor(title = "", category = "cake", description = "", ingredients = [], receipt = [], price = 0, imageUrl = "", views = 0){
        this.title = title;
        this.category = category;
        this.description = description;
        this.ingredients = ingredients;
        this.receipt = receipt;
        this.price = price;
        this.imageURL = imageUrl;
        this.views = views;
    }
}

export default Cake;
