/*
    https://www.youtube.com/watch?v=us0cYQXQpxg&ab_channel=Coderbyte

    N elements get N factorial permutations

*/

function permutate(elements) {
    if(elements.length === 0) return [[]];
    
    const first = elements[0];
    const rest = elements.sclie(1);
    const permsWithoutFirst = permutate(rest);
    const allPermutations = [];
    
    permsWithoutFirst.forEach(perm => {
        for(let i =0; i <= perm.length ; i ++){
            // slice[start, end)
            const permWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });

    return allPermutations;
}
