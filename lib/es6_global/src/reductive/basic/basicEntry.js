'use strict';

import * as Block                         from "../../../../../node_modules/bs-platform/lib/es6/block.js";
import * as Reductive$WonderReasonTest    from "../reductive.js";
import * as SimpleStore$WonderReasonTest  from "./simpleStore.js";
import * as ComplexStore$WonderReasonTest from "./complexStore.js";

Reductive$WonderReasonTest.Store[/* subscribe */2](SimpleStore$WonderReasonTest.store, (function () {
        console.log(Reductive$WonderReasonTest.Store[/* getState */5](SimpleStore$WonderReasonTest.store));
        return /* () */0;
      }));

var partial_arg = Reductive$WonderReasonTest.Store[/* dispatch */4];

function simpleDispatch(param) {
  return partial_arg(SimpleStore$WonderReasonTest.store, param);
}

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Decrement */1);

simpleDispatch(/* Increment */0);

Reductive$WonderReasonTest.Store[/* replaceReducer */6](SimpleStore$WonderReasonTest.store, SimpleStore$WonderReasonTest.doubleCountReducer);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

simpleDispatch(/* Increment */0);

var partial_arg$1 = Reductive$WonderReasonTest.Store[/* dispatch */4];

function complexDispath(param) {
  return partial_arg$1(ComplexStore$WonderReasonTest.store, param);
}

complexDispath(/* StringAction */Block.__(0, [/* A */0]));

complexDispath(/* StringAction */Block.__(0, [/* A */0]));

complexDispath(/* StringAction */Block.__(0, [/* B */1]));

complexDispath(/* StringAction */Block.__(0, [/* B */1]));

complexDispath(/* CountAction */Block.__(1, [/* Increment */0]));

complexDispath(/* CountAction */Block.__(1, [/* Increment */0]));

complexDispath(/* CountAction */Block.__(1, [/* Increment */0]));

complexDispath(/* CountAction */Block.__(1, [/* Increment */0]));

var compleState = Reductive$WonderReasonTest.Store[/* getState */5](ComplexStore$WonderReasonTest.store);

console.log(compleState[/* counter */0]);

console.log(compleState[/* notCount */1]);

export {
  simpleDispatch ,
  complexDispath ,
  compleState    ,
  
}
/*  Not a pure module */
