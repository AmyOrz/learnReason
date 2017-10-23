'use strict';

import * as Caml_exceptions         from "../../../../../node_modules/bs-platform/lib/es6/caml_exceptions.js";
import * as Caml_builtin_exceptions from "../../../../../node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js";

var A = Caml_exceptions.create("ThunkedStore-WonderReasonTest.A");

var B = Caml_exceptions.create("ThunkedStore-WonderReasonTest.B");

var b;

if (B === A) {
  b = 1;
} else if (B === B) {
  b = 2;
} else {
  throw [
        Caml_builtin_exceptions.match_failure,
        [
          "/home/arvin/yangHao/learnReason/src/reductive/thunk/thunkedStore.re",
          12,
          2
        ]
      ];
}

console.log(b);

var aa = B;

export {
  A  ,
  B  ,
  aa ,
  b  ,
  
}
/* b Not a pure module */
