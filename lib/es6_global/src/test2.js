'use strict';

import * as $$Array                   from "../../../node_modules/bs-platform/lib/es6/array.js";
import * as ImgParse$WonderReasonTest from "./imgParse.js";

function createImgAndInsertDom(url) {
  var img = document.createElement("img");
  var container = document.getElementById("index");
  img.src = url;
  return container.appendChild(img);
}

function showImg(imgItem) {
  return createImgAndInsertDom(imgItem[/* media */0][/* m */0]);
}

function renderImg(text) {
  return $$Array.iter(showImg, ImgParse$WonderReasonTest.getResult(text)[/* items */0]);
}

var url = "./src/test.json";

fetch(url).then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve(renderImg(text));
      }));

export {
  createImgAndInsertDom ,
  showImg               ,
  renderImg             ,
  url                   ,
  
}
/*  Not a pure module */
