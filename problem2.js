function problem2(cars)
{ 
    let temp=0;
    const last_car=cars.filter((row,index)=>
    {
        temp=Math.max(index,temp);   
        
    }
    );

    return temp;

    
}
module.exports=problem2;