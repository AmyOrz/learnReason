'use strict';


var sum = [0];

for(var x = 1; x <= 10; ++x){
  sum[0] = sum[0] + x | 0;
}

console.log(sum);

function recur(x) {
  if (x) {
    return recur(x - 1 | 0) + x | 0;
  } else {
    return 1;
  }
}

var res = recur(10);

console.log(res);

var xStatr = 1;

var xEnd = 10;

export {
  xStatr ,
  xEnd   ,
  sum    ,
  recur  ,
  res    ,
  
}
/*  Not a pure module */
