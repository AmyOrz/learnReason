type a = ..;

type a +=
  | A;

type a +=
  | B;

let aa: a = B;

let b =
  switch aa {
  | A => 1
  | B => 2
  };

Js.log b;