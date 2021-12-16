const longestConsecutiveSequence = (inputArray) => {
	// Your code here
    if(inputArray.length === 0 ) return 0;

    inputArray.sort((a, b) => a-b);
    let maxLen = 1;
    let subLen= 1;
    for(let i =1; i< inputArray.length ;i ++) {
        if(inputArray[i]==inputArray[i-1] + 1)
        {
            subLen++;
            maxLen = Math.max(maxLen, subLen);
        }
        else{
            subLen =1;
        }
    }

	return maxLen;
}


console.log(longestConsecutiveSequence([100,4,200,1,3,2]));