'use strict';


var foo = [123];

foo[0] = 11;

console.log(foo);

var a = foo[0] + 123 | 0;

console.log(a);

var b = [foo[0] + 100 | 0];

console.log(b);

export {
  foo ,
  a   ,
  b   ,
  
}
/*  Not a pure module */
