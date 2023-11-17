function problem3(inventory)
{

    let car_model=inventory.map((row)=>row.car_model.trim().toLowerCase());


    let sorted_car_model=car_model.sort();

    console.log(sorted_car_model);

    let unique_sorted_car_model=sorted_car_model.filter((value,index)=> sorted_car_model.indexOf(value)===index);


    let sorted_inventory=unique_sorted_car_model.map((row)=>
    {
        return inventory.filter(find_row=>row===find_row.car_model.toLowerCase().trim()).sort();
    });
    return sorted_inventory;

}

module.exports=problem3;