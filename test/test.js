root=require('../root.js');
problem1=require('../problem1.js');
const inventory=root.inventory;
let output=problem1(inventory,33);


console.log(`Car 33 is a ${output.cr_year}, ${output.car_make}, ${output.car_model}`);