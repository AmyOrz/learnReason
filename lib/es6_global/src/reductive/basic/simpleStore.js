'use strict';

import * as Reductive$WonderReasonTest from "../reductive.js";

function countReducer(state, action) {
  if (action !== 0) {
    return state - 1 | 0;
  } else {
    return state + 1 | 0;
  }
}

function doubleCountReducer(state, action) {
  if (action !== 0) {
    return state - 2 | 0;
  } else {
    return state + 2 | 0;
  }
}

var store = Reductive$WonderReasonTest.Store[/* create */0](countReducer, 10, /* None */0, /* () */0);

export {
  countReducer       ,
  doubleCountReducer ,
  store              ,
  
}
/* store Not a pure module */
