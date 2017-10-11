let ageAndName = (24, "arvin");

Js.log ageAndName;

let (x, y) = ageAndName;

Js.log x;

type point = (float, float);

let onePoint: point = (1.3, 2.44);

let isWindowOpen = true;

let isDoorOpen = false;

let isGo =
  switch (isWindowOpen, isDoorOpen) {
  | (true, true) => false
  | (true, false) => true
  | (false, true) => false
  | (false, false) => false
  };

  Js.log isGo;