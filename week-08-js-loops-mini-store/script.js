//Creates array of store inventory
const inventory = ["Peaches", "Avocados", "Pears", "Spaghetti", "Gum", "Milk"]

//Prints the "Store Inventory" header for the array below
console.log("Store Inventory:")

/*
Sets index (i) to 0, and executes the code within while the index
is less than the length of the inventory array. Increases index by 1
for each loop. With each loop, prints the corresponding index item.
*/
for (let i = 0; i < inventory.length; i++){
    console.log(inventory[i]);
}