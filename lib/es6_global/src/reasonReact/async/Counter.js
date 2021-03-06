'use strict';

import * as Block       from "../../../../../node_modules/bs-platform/lib/es6/block.js";
import * as Curry       from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as React       from "react";
import * as ReasonReact from "../../../../../node_modules/reason-react/lib/es6_global/src/reasonReact.js";

function setInputRef(theRef, param) {
  param[/* state */4][/* myInputRef */2][0] = theRef === null ? /* None */0 : [theRef];
  return /* () */0;
}

var component = ReasonReact.reducerComponent("Counter");

function make(name, _) {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function (self) {
      self[/* state */4][/* timerId */1][0] = /* Some */[setInterval(Curry._1(self[/* reduce */3], (function () {
                    return /* Tick */0;
                  })), 1000)];
      return /* NoUpdate */0;
    });
  newrecord[/* willUnmount */6] = (function (param) {
      var match = param[/* state */4][/* timerId */1][0];
      if (match) {
        clearInterval(match[0]);
        return /* () */0;
      } else {
        return /* () */0;
      }
    });
  newrecord[/* render */9] = (function (param) {
      var count = param[/* state */4][/* count */0];
      var match = +(count === 1);
      var timesMessage = match !== 0 ? "second" : "seconds";
      var greet = "hi," + (String(name) + (" sepnd " + (String(count) + (" " + (String(timesMessage) + " on this page!")))));
      return React.createElement("div", undefined, React.createElement("p", undefined, greet), React.createElement("input", {
                      ref: Curry._1(param[/* handle */0], setInputRef)
                    }));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* count */0,
              /* timerId */[/* None */0],
              /* myInputRef */[/* None */0]
            ];
    });
  newrecord[/* reducer */12] = (function (_, state) {
      return /* Update */Block.__(0, [/* record */[
                  /* count */state[/* count */0] + 1 | 0,
                  /* timerId */state[/* timerId */1],
                  /* myInputRef */state[/* myInputRef */2]
                ]]);
    });
  return newrecord;
}

export {
  setInputRef ,
  component   ,
  make        ,
  
}
/* component Not a pure module */
