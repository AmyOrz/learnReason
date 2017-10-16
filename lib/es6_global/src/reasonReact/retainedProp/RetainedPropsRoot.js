'use strict';

import * as ReactDOMRe                     from "../../../../../node_modules/reason-react/lib/es6_global/src/reactDOMRe.js";
import * as ReasonReact                    from "../../../../../node_modules/reason-react/lib/es6_global/src/reasonReact.js";
import * as RetainedProps$WonderReasonTest from "./RetainedProps.js";

var toggle = [/* false */0];

function render() {
  toggle[0] = 1 - toggle[/* contents */0];
  var match = toggle[/* contents */0];
  return ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, RetainedProps$WonderReasonTest.make(match !== 0 ? "fck" : "hehe", /* array */[])), "index");
}

setInterval(render, 1000);

render(/* () */0);

export {
  toggle ,
  render ,
  
}
/*  Not a pure module */
