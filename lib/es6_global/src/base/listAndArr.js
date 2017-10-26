'use strict';

import * as List       from "../../../../node_modules/bs-platform/lib/es6/list.js";
import * as Caml_array from "../../../../node_modules/bs-platform/lib/es6/caml_array.js";

var list = /* :: */[
  1,
  /* :: */[
    2,
    /* :: */[
      3,
      /* [] */0
    ]
  ]
];

var anoherList = /* :: */[
  0,
  list
];

console.log(anoherList);

var arr = /* array */[
  1,
  2,
  3,
  4,
  5
];

Caml_array.caml_array_set(arr, 0, 12);

console.log(arr);

var count2 = /* record */[/* number */2];

var count3 = /* record */[/* number */3];

var countList_000 = /* record */[/* number */1];

var countList_001 = /* :: */[
  count2,
  /* :: */[
    count3,
    /* [] */0
  ]
];

var countList = /* :: */[
  countList_000,
  countList_001
];

var count1 = /* record */[/* number */123];

var newList = /* :: */[
  count1,
  countList
];

function func(list) {
  console.log(list);
  return /* () */0;
}

List.iter(func, newList);

List.iter(func, countList);

var tailList = countList;

export {
  list       ,
  anoherList ,
  arr        ,
  count2     ,
  count3     ,
  countList  ,
  count1     ,
  newList    ,
  func       ,
  tailList   ,
  
}
/*  Not a pure module */
