type Recipe = {
    title: string;
    ingredients: {name: string, quantity: string}[];
    instructions: string;
};

const processRecipe = (recipe: Recipe)  => {
    // Do something with the recipe in here
};

processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        {name: "Flour", quantity: "2 cups"},
        {name: "Suger", quantity: "1 cup"},
        // other ingredients here...
    ],
    instructions: "...",
})