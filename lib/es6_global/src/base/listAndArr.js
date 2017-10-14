'use strict';

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

export {
  list       ,
  anoherList ,
  arr        ,
  
}
/*  Not a pure module */
