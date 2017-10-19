'use strict';

import * as List from "../../../../node_modules/bs-platform/lib/es6/list.js";

function add(y, z) {
  return (1 + y | 0) + z | 0;
}

var b = 7;

console.log(b);

function noArgs() {
  console.log("this is not args");
  return /* () */0;
}

console.log("this is not args");

function draw(r, _) {
  if (r) {
    var r$1 = r[0];
    return r$1 + r$1;
  } else {
    return "fck";
  }
}

var r = "aaa";

var c = r + r;

console.log(c);

function test(a, b, _) {
  return a + b | 0;
}

function v(param) {
  return (function () {
      return param + 12 | 0;
    });
}

function n() {
  return 135;
}

var qq = n(/* () */0);

console.log(qq);

function getSome(x) {
  return x + 1 | 0;
}

function mapTest2(f, z) {
  var part = f(z);
  return part + z | 0;
}

var aaa = mapTest2(getSome, 12);

console.log(aaa);

var text = "  qwefef ef wef";

text.trim();

var a = List.append(/* :: */[
      1,
      /* [] */0
    ], /* :: */[
      2,
      /* [] */0
    ]);

export {
  add      ,
  b        ,
  noArgs   ,
  draw     ,
  c        ,
  test     ,
  v        ,
  n        ,
  qq       ,
  getSome  ,
  mapTest2 ,
  aaa      ,
  text     ,
  a        ,
  
}
/*  Not a pure module */
