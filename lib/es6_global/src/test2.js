'use strict';


var getUrl = "./src/test.json";

function renderImg(json) {
  console.log(json);
  return /* () */0;
}

fetch(getUrl).then((function (prim) {
          return prim.json();
        })).then((function (json) {
        return Promise.resolve((console.log(json), /* () */0));
      }));

export {
  getUrl    ,
  renderImg ,
  
}
/*  Not a pure module */
