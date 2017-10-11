let a = "hello";

let b = "wrold";

let c = a ^ b;

let world = {j|世界|j};

let fck = {j|你的，$world|j};

Js.log world;

Js.log fck;

let symbol = 'c';

let isVowel =
  switch symbol {
  | 'a'
  | 'e'
  | 'i'
  | 'o'
  | 'u' => true
  | _ => not false
  };

Js.log isVowel;