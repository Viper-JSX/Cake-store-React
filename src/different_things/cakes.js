import Cake from '../classes/Cake.js';

let cakes = [
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),

    new Cake(
        "Jungle cake", 
        "cake",
        "Some strange cake you'll newer cook", 
        [
            {
                orderNumber: 1,
                ingredientName: "Onion",
                measurementUnit: "g",
                amountOfUnits: 50
            },

            {
                orderNumber: 2,
                ingredientName: "Mushroom",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}],  
        300,
        "data:image/jpeg;base64,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",
        300
    ),

    new Cake(
        "Napoleon",
        "cake", 
        "Some strange cake you'll newer cook", 
        [
            {
                orderNumber: 1,
                ingredientName: "Cheese",
                measurementUnit: "g",
                amountOfUnits: 50
            },

            {
                orderNumber: 2,
                ingredientName: "Cherry",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ],
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
         400,
        "data:image/jpeg;base64,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",
        500
    ),

    new Cake(
        "Black cupcake",
        "cupcake", 
        "Some strange cake you'll newer cook", 
        [
            {
                orderNumber: 1,
                ingredientName: "Cheese",
                measurementUnit: "g",
                amountOfUnits: 50
            },

            {
                orderNumber: 2,
                ingredientName: "Cherry",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ],
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        500,
        "https://www.theflavorbender.com/wp-content/uploads/2020/06/Chocolate-Cupcakes-SM-5629.jpg",
        500
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
    new Cake(
        "Forest cake", 
        "cake",
        "Some strange cake you'll newer cook",
        [
            {
                orderNumber: 1,
                ingredientName: "Tea",
                measurementUnit: "g",
                amountOfUnits: 20
            },

            {
                orderNumber: 2,
                ingredientName: "Cocoa",
                measurementUnit: "spoon",
                amountOfUnits: 20
            }
        ], 
        [{orderNumber: 1, stepText: "Take some tea"}, {orderNumber: 2, stepText: "Eat tea"}, {orderNumber: 3, stepText: "Spit the tea"}, {orderNumber: 4, stepText: "Eat the tea"}], 
        100,
        "https://gurgaonbakers.com/wp-content/uploads/2020/12/party-time-in-the-jungle-cake.jpg",
        1000
    ),
];

export default cakes;