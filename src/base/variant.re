type myVariant =
  | YES
  | No
  | FCK;

let fck = No;

Js.log fck;

type account =
  | Non
  | Instagram string
  | Face string int;

let myAccount = Face "arvin" 24;

let myInstagram = Instagram "hehe";

/* 消除if/else */
let myName =
  switch myAccount {
  | Non => "fck"
  | Instagram name => "hello " ^ name ^ "!"
  | Face name age => "hi " ^ name ^ ",you are " ^ string_of_int age ^ " years old"
  };

Js.log myName;