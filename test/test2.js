let root=require("../root.js");
let problem2= require("../problem2.js");

let inventory=root.inventory;
let output_index=problem2(inventory);
let output=inventory[output_index];
console.log(`Last car is a ${output.car_make}, ${output.car_model}`);

