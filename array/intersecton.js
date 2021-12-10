function getInterSection()
{
    let arrays = arguments;
    let res =[];
    if(arrays == null || arrays.length === 0)
        return res;
    for(let i = 0; i< arrays[0].length; i++)  // first array
    {
        let element = arrays[0][i];
        let j = 1;
        for(; j< arrays.length; j++)  // check rest arrays  
        {
            if (arrays[j].indexOf(element)< 0)
            {
                break;
            }
        }   
        if( j == arrays.length )
            res.push(element);
    }
    return res;
}

let res = getInterSection([1, 2, 3], [2, 101,0, 1, 10], [2,0,9, 1]);
console.log(res);