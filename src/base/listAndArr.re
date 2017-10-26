let list = [1, 2, 3];

let anoherList = [0, ...list];

Js.log anoherList;

let arr = [|1, 2, 3, 4, 5|];

arr.(0) = 12;

Js.log arr;

type count = {number: int};

let count1 = {number: 1};

let count2 = {number: 2};

let count3 = {number: 3};

let countList = [count1, count2, count3];

let count1 = {number: 123};

let newList = [count1, ...countList];

let func list => Js.log list;

List.iter func newList;

let tailList = switch ( newList ){
| [_,...tail] => tail
| [] => []
};

List.iter func tailList;
