/*


https://www.geeksforgeeks.org/find-maximum-sum-triplets-array-j-k-ai-aj-ak/


[Uber]
*/


/*
Brute force: O(n^2)
*/

// Function to calculate maximum triplet sum
function maxTripletSum(arr, n)
{
    // Initialize the answer
    let ans = 0;
 
    // i is the index of the middle num
    for (let i = 1; i < n - 1; ++i) {
        let max1 = 0, max2 = 0;
 
        // find maximum value(less than arr[i])
        // from 0 to i-1
        for (let j = 0; j < i; ++j)
            if (arr[j] < arr[i])
                max1 = Math.max(max1, arr[j]);
 
        // find maximum value(greater than arr[i])
        // from i+1 to n-1
        for (let j = i + 1; j < n; ++j)
            if (arr[j] > arr[i])
                max2 = Math.max(max2, arr[j]);
 
        // store maximum answer
        if(max1 && max2)
            ans=Math.max(ans,max1+arr[i]+max2);
    }
 
    return ans;
}
 