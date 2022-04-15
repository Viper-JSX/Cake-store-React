export function sort(array, order){
    const sortedArray = [...array];

    if(order == "high_to_low"){
        for(let i = 0; i < sortedArray.length; i++){
            for(let j = 0; j < sortedArray.length - 1; j++){
                if(sortedArray[j].price < sortedArray[j + 1].price){
                    let temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
        }
    }

    else if(order == "low_to_high"){
        for(let i = 0; i < sortedArray.length; i++){
            for(let j = 0; j < sortedArray.length - 1; j++){
                if(sortedArray[j].price > sortedArray[j + 1].price){
                    let temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
        }
    }



    return sortedArray;
}