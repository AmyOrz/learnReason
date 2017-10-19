'use strict';

import * as React       from "react";
import * as Pervasives  from "../../../../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as ReasonReact from "../../../../../node_modules/reason-react/lib/es6_global/src/reasonReact.js";

var component = ReasonReact.statelessComponent("TodoFoot");

function make(count, completedCount, nowShowing, onClearCompleted, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var match = +(count === 1);
      var activeTodoWord = match !== 0 ? "item" : "items";
      var match$1 = +(completedCount > 0);
      var clearButton = match$1 !== 0 ? React.createElement("button", {
              className: "clear-completed",
              onClick: onClearCompleted
            }, "Clear completed") : null;
      var match$2;
      switch (nowShowing) {
        case 0 : 
            match$2 = /* tuple */[
              "selected",
              "",
              ""
            ];
            break;
        case 1 : 
            match$2 = /* tuple */[
              "",
              "selected",
              ""
            ];
            break;
        case 2 : 
            match$2 = /* tuple */[
              "",
              "",
              "selected"
            ];
            break;
        
      }
      return React.createElement("footer", {
                  className: "footer"
                }, React.createElement("span", {
                      className: "todo-count"
                    }, React.createElement("span", undefined, Pervasives.string_of_int(count)), " " + (activeTodoWord + " left")), React.createElement("ul", {
                      className: "filters"
                    }, React.createElement("li", undefined, React.createElement("a", {
                              className: match$2[0],
                              href: "#/"
                            }, "All")), " ", React.createElement("li", undefined, React.createElement("a", {
                              className: match$2[1],
                              href: "#/active"
                            }, "Active")), " ", React.createElement("li", undefined, React.createElement("a", {
                              className: match$2[2],
                              href: "#/completed"
                            }, "Completed"))), clearButton);
    });
  return newrecord;
}

export {
  component ,
  make      ,
  
}
/* component Not a pure module */