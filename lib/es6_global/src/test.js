'use strict';


function func(x, y) {
  return x + y | 0;
}

var Test1 = /* module */[/* b */2];

var a = 1;

var b = 4;

export {
  a     ,
  func  ,
  b     ,
  Test1 ,
  
}
/* No side effect */
