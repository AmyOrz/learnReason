'use strict';

import * as Json_decode from "../../../../node_modules/bs-json/lib/es6_global/src/Json_decode.js";

function imgUrl(json) {
  return /* record */[/* m */Json_decode.field("m", Json_decode.string, json)];
}

function imgItem(json) {
  return /* record */[/* media */Json_decode.field("media", imgUrl, json)];
}

function imgArr(json) {
  return /* record */[/* items */Json_decode.field("items", (function (param) {
                  return Json_decode.array(imgItem, param);
                }), json)];
}

var Decode = /* module */[
  /* imgUrl */imgUrl,
  /* imgItem */imgItem,
  /* imgArr */imgArr
];

function getResult(result) {
  return imgArr(JSON.parse(result));
}

export {
  Decode    ,
  getResult ,
  
}
/* No side effect */
