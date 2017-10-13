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

/* 消除if/else ，使用_来表示剩下的可能性*/
let myName =
  switch myAccount {
  | Instagram name => "hello " ^ name ^ "!"
  | Face name age => "hi " ^ name ^ ",you are " ^ string_of_int age ^ " years old"
  | _ => "ww"
  };

Js.log myName;

/* 我们可以获取其中一种可能性 */
let myInstagram = Instagram "hehe";

let result =
  switch myInstagram {
  | Instagram ("fck" | "hehe") => "the result is so bad"
  | Instagram name => "the result is " ^ name
  | _ => "the error"
  };

Js.log result;

/* 使用option来代替不存在的情况 */
let ooop opt =>
  switch opt {
  | None => 0
  | Some a => a ? 12 : 13
  };

let res = ooop (Some true);

let res1 = ooop None;

Js.log res;