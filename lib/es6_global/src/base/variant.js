'use strict';

import * as Block      from "../../../../node_modules/bs-platform/lib/es6/block.js";
import * as Pervasives from "../../../../node_modules/bs-platform/lib/es6/pervasives.js";

console.log(/* No */1);

var myAccount = /* Face */Block.__(1, [
    "arvin",
    24
  ]);

var myName;

myName = typeof myAccount === "number" ? "ww" : (
    myAccount.tag ? "hi arvin,you are " + (Pervasives.string_of_int(24) + " years old") : "hello arvin!"
  );

console.log(myName);

var myInstagram = /* Instagram */Block.__(0, ["hehe"]);

var result;

if (typeof myInstagram === "number") {
  result = "the error";
} else if (myInstagram.tag) {
  result = "the error";
} else {
  var name = "hehe";
  switch (name) {
    case "fck" : 
    case "hehe" : 
        result = "the result is so bad";
        break;
    default:
      result = "the result is hehe";
  }
}

console.log(result);

function ooop(opt) {
  if (opt) {
    if (opt[0] !== 0) {
      return 12;
    } else {
      return 13;
    }
  } else {
    return 0;
  }
}

var res = ooop(/* Some */[/* true */1]);

console.log(res);

var fck = /* No */1;

var res1 = 0;

export {
  fck         ,
  myAccount   ,
  myName      ,
  myInstagram ,
  result      ,
  ooop        ,
  res         ,
  res1        ,
  
}
/*  Not a pure module */
