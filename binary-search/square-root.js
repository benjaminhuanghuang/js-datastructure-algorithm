export const squareRoot = (n) => {
    let low =1; 
    let high = n;

    while(low <= high){
      let mid = Math.floor((high - low) / 2) + low;
      if ( mid == n / mid){
        return mid;
      }
      else if (mid < n / mid){
        low = mid + 1;
      }else {
        high = mid -1;
      }
    }
    return low;
  };
  