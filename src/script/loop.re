let xStatr = 1;

let xEnd = 10;

let sum = ref 0;

for x in xStatr to xEnd {
  sum := !sum + x
};

Js.log sum;

let func = (fun x => x + 1) [@bs];

let rec recur x =>
  if (x == 0) {
    1
  } else {
    recur (x - 1) + (x)
  };

let res = recur 10;

Js.log res;