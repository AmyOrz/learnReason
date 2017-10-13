/* 定义函数，可以一次性传入2个参数，也可以分开传入，分开则为curry */
let add y z => {
  let part = 1;
  part + y + z
};

let b = add 2 4;

Js.log b;

/* 没有参数的函数有副作用，在reason中为unit，使用（）执行 */
let noArgs () => Js.log "this is not args";

noArgs ();

/* 这里的（）主要用于消除歧义，必须使用（）来执行函数 */
let draw ::r=? () =>
  switch r {
  | None => "fck"
  | Some r => r ^ r
  };

let c = draw r::"aaa" ();

Js.log c;

/* 可以使用label：： 来确定curry传入的参数，就可以先传入b，后执行a */
let test ::a ::b () => a + b;

let v = test b::12;

let n = v a::123;

let qq = n ();

Js.log qq;

/* 使用[@bs]在函数后表示该可以作为高阶函数传入其他函数中运行，不会被curry */
let getSome = (fun x => x + 1) [@bs];

/* let func = (fun x => x + 1) [@bs]; */
let mapTest2 f z =>
  {
    let part = f z[@bs];
    part + z
  };

let aaa = mapTest2 getSome 12;

Js.log aaa;