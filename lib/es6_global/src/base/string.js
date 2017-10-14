'use strict';


var a = "hello";

var b = "wrold";

var c = "hellowrold";

var world = "世界";

var fck = "你的，" + (String(world) + "");

console.log(world);

console.log(fck);

var switcher = 2;

var isVowel;

if (switcher > 20 || switcher < 0) {
  isVowel = /* true */1;
} else {
  switch (switcher) {
    case 0 : 
    case 1 : 
    case 2 : 
    case 3 : 
    case 4 : 
    case 5 : 
    case 6 : 
    case 7 : 
    case 8 : 
    case 9 : 
    case 10 : 
    case 11 : 
    case 12 : 
    case 13 : 
    case 14 : 
    case 15 : 
    case 16 : 
    case 17 : 
    case 18 : 
    case 19 : 
    case 20 : 
        isVowel = /* true */1;
        break;
    
  }
}

console.log(isVowel);

var symbol = /* "c" */99;

export {
  a       ,
  b       ,
  c       ,
  world   ,
  fck     ,
  symbol  ,
  isVowel ,
  
}
/* fck Not a pure module */
