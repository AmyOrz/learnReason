'use strict';

import * as React       from "react";
import * as ReasonReact from "../../../../../node_modules/reason-react/lib/es6_global/src/reasonReact.js";

var component = ReasonReact.statelessComponentWithRetainedProps("RetainedProps");

function make(message, _) {
  var newrecord = component.slice();
  newrecord[/* didUpdate */5] = (function (param) {
      if (param[/* oldSelf */0][/* retainedProps */5][/* message */0] !== param[/* newSelf */1][/* retainedProps */5][/* message */0]) {
        console.log("the component props is change");
        return /* () */0;
      } else {
        return 0;
      }
    });
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, message);
    });
  newrecord[/* retainedProps */11] = /* record */[/* message */message];
  return newrecord;
}

export {
  component ,
  make      ,
  
}
/* component Not a pure module */
