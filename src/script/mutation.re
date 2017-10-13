/*通常情况下let的为不可变数据，可以使用ref来标注可变 */
let foo = ref 123;

foo := 11;

Js.log foo;

/* 可以通过！来获取mutable的值 */

let a = !foo + 123;

Js.log a;

let b = ref (!foo + 100);

Js.log b;