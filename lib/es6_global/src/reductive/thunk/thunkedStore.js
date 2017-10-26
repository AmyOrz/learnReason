'use strict';

import * as Caml_exceptions              from "../../../../../node_modules/bs-platform/lib/es6/caml_exceptions.js";
import * as Reductive$WonderReasonTest   from "../reductive.js";
import * as Middleware$WonderReasonTest  from "../middleware.js";
import * as SimpleStore$WonderReasonTest from "../basic/simpleStore.js";

function stringReducer(state, action) {
  if (action !== 0) {
    return state + "b";
  } else {
    return state + "a";
  }
}

var StringAction = Caml_exceptions.create("ThunkedStore-WonderReasonTest.StringAction");

var CountAction = Caml_exceptions.create("ThunkedStore-WonderReasonTest.CountAction");

function appReducer(state, action) {
  if (action[0] === StringAction) {
    return /* record */[
            /* count */state[/* count */0],
            /* notAcount */stringReducer(state[/* notAcount */1], action[1])
          ];
  } else if (action[0] === CountAction) {
    return /* record */[
            /* count */SimpleStore$WonderReasonTest.countReducer(state[/* count */0], action[1]),
            /* notAcount */state[/* notAcount */1]
          ];
  } else {
    return state;
  }
}

function thunkedLogger(store, next) {
  return (function (param) {
      return Middleware$WonderReasonTest.thunk(store, (function (param) {
                    return Middleware$WonderReasonTest.logger(store, next, param);
                  }), param);
    });
}

var store = Reductive$WonderReasonTest.Store[/* create */0](appReducer, /* record */[
      /* count */0,
      /* notAcount */"fck"
    ], /* Some */[thunkedLogger], /* () */0);

export {
  stringReducer ,
  StringAction  ,
  CountAction   ,
  appReducer    ,
  thunkedLogger ,
  store         ,
  
}
/* store Not a pure module */
