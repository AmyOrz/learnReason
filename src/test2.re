module Test111 = Test;
let isPass = false;

let message =
  switch isPass {
  | false => "hehe"
  | true => "eee"
  };

Js.log message;

let a = "asfd";
let b = "wfgwefef";

Js.log (a ^ b);