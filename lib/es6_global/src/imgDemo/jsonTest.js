'use strict';

import * as $$Array     from "../../../../node_modules/bs-platform/lib/es6/array.js";
import * as Json_decode from "../../../../node_modules/bs-json/lib/es6_global/src/Json_decode.js";

function point(json) {
  return /* float array */[
          Json_decode.field("x", Json_decode.$$float, json),
          Json_decode.field("y", Json_decode.$$float, json)
        ];
}

function line(json) {
  return /* record */[
          /* start */Json_decode.field("start", (function (param) {
                  return Json_decode.array(point, param);
                }), json),
          /* end_ */Json_decode.field("end", (function (param) {
                  return Json_decode.array(point, param);
                }), json),
          /* thickness */Json_decode.optional((function (param) {
                  return Json_decode.field("thickness", Json_decode.$$int, param);
                }), json)
        ];
}

var Decode = /* module */[
  /* point */point,
  /* line */line
];

var data = " {\n    \"start\": [{ \"x\": 1.8, \"y\": -0.5 },{ \"x\": 1.3, \"y\": -0.4 },{ \"x\": 1.0, \"y\": -0.4 }],\n    \"end\": [{ \"x\": 1.1, \"y\": -0.4 },{ \"x\": 1.1, \"y\": -0.4 },{ \"x\": 1.1, \"y\": -0.4 }]\n  } ";

function log(message) {
  console.log(message);
  return /* () */0;
}

function getParseData(result) {
  return JSON.parse(result);
}

var line$1 = line(JSON.parse(data));

console.log(line$1);

$$Array.iter(log, line$1[/* start */0]);

export {
  Decode       ,
  data         ,
  log          ,
  getParseData ,
  line$1         as line,
  
}
/* line Not a pure module */
