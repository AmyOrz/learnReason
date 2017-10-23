'use strict';

import * as Curry                      from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Reductive$WonderReasonTest from "./reductive.js";

function logger(store, next, action) {
  console.log(action);
  var returnValue = Curry._1(next, action);
  console.log(Reductive$WonderReasonTest.Store[/* getState */5](store));
  return returnValue;
}

export {
  logger ,
  
}
/* Reductive-WonderReasonTest Not a pure module */
