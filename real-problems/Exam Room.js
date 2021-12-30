/*
855. Exam Room

[Facebook]

https://leetcode.com/problems/exam-room/

*/

/*
 每次选择学生之间最大的距离  0 到 fist student， students,  last student to N -1

 */

/**
 * @param {number} n
 */
 var ExamRoom = function (n) {
  this.seats = [];
  this.N = n;
};

/**
 * @return {number}
 * Select and seat
 */
ExamRoom.prototype.seat = function () {
  // first time, seats is empty
  if (this.seats.length == 0) {
    this.seats.push(0);
    return 0;
  }
  // not empty
  let pre = -1; // pre student
  let maxDist = this.seats[0];  // 0 to first student
  let seat = 0;

  for( let i =0; i < this.seats.length; i++){
    const curr = this.seats[i];
    if(pre > -1){
      const dist = Math.floor((curr-pre) /2);
      if(dist > maxDist) {
        maxDist = dist;
        seat = pre + dist;
      }
    }
    pre = curr;
  }
  if(this.N -1 - this.seats[this.seats.length -1] > maxDist){
    seat = this.N -1;
  }

  // inster the seat
  let i = 0 ;
  while(i < this.seats.length && this.seats[i] < seat)
  {
    i++;
  }
  this.seats.splice(i, 0, seat);
  return seat;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  let i = 0 ;
  while(i < this.seats.length && this.seats[i] != p)
  {
    i++;
  }
  this.seats.splice(i, 1);
};


/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
