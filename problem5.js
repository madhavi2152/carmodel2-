function problem5(inventory)
{
    let output=inventory.map(row=>{
        if(row.car_year<2000)
        return{id:row.id,make:row.car_make,model:row.car_model,year:row.car_year};
    else
    return null;
    }).filter(number => number!=null);
    return output;
}

module.exports=problem5;