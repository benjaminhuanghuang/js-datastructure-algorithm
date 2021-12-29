class FenwickTree {
  constructor(n) {
    this.sums = new Array(n+1).fill(0);
  }

  update( i, dleta){
    while(i < this.sums.length) {
      sums[i] += dleta;
      i += lowbit(i)
    }
  }

  query(i) {
    let sum =0;
    while(i > 0){
      sum += sums[i];
      i -= lowbit(i);
    }

    return sum;
  }

  lowbit(x) {
    return x & (-x);
  }
}