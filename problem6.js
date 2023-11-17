function problem6(inventory)
{
    const output=inventory.map(row=>
        {
            if(row.car_make.toLowerCase()==="bmw" ||row.car_make.toLowerCase()==="audi")
            return row;
        }).filter(row=> row!=null);

   return output;
}

module.exports=problem6;