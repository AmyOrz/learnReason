'use strict';

import * as $$Array                   from "../../../node_modules/bs-platform/lib/es6/array.js";
import * as ImgParse$WonderReasonTest from "./imgParse.js";

var url = "./src/test.json";

function createImgDomByUrl(url) {
  var img = document.createElement("img");
  var container = document.getElementById("index");
  img.src = url;
  return container.appendChild(img);
}

function showImg(imgItem) {
  return createImgDomByUrl(imgItem[/* media */0][/* m */0]);
}

function getItems(res) {
  return res[/* items */0];
}

function renderImg(text) {
  var res = ImgParse$WonderReasonTest.getResult(text)[/* items */0];
  return $$Array.iter(showImg, res);
}

fetch(url).then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve(renderImg(text));
      }));

export {
  url               ,
  createImgDomByUrl ,
  showImg           ,
  getItems          ,
  renderImg         ,
  
}
/*  Not a pure module */
