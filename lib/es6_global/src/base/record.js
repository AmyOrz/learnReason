'use strict';


var you = /* record */[
  /* age */13,
  /* name */"arvin"
];

var he = /* record */[
  /* name */"hehe",
  /* age */1
];

he[/* age */1] = 12;

var name = he[/* name */0];

var age = he[/* age */1];

console.log(name);

var me = /* record */[
  /* age */12,
  /* name */"arvin"
];

export {
  me   ,
  you  ,
  he   ,
  name ,
  age  ,
  
}
/*  Not a pure module */
