function problem1(element,id)
{
    let matched=0;
    const output= element.map((row,index) =>
    {
        if(matched===0 && row.id===id)
        matched=element[index];       
    });

    return matched;

}
module.exports=problem1;