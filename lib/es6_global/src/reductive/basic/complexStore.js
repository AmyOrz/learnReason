'use strict';

import * as Reductive$WonderReasonTest   from "../reductive.js";
import * as Middleware$WonderReasonTest  from "../middleware.js";
import * as SimpleStore$WonderReasonTest from "./simpleStore.js";

function stringReducer(state, action) {
  if (action !== 0) {
    return state + "b";
  } else {
    return state + "a";
  }
}

function appReducer(state, action) {
  if (action.tag) {
    return /* record */[
            /* counter */SimpleStore$WonderReasonTest.countReducer(state[/* counter */0], action[0]),
            /* notCount */state[/* notCount */1]
          ];
  } else {
    return /* record */[
            /* counter */state[/* counter */0],
            /* notCount */stringReducer(state[/* notCount */1], action[0])
          ];
  }
}

var store = Reductive$WonderReasonTest.Store[/* create */0](appReducer, /* record */[
      /* counter */0,
      /* notCount */"fck"
    ], /* Some */[Middleware$WonderReasonTest.logger], /* () */0);

export {
  stringReducer ,
  appReducer    ,
  store         ,
  
}
/* store Not a pure module */
