Reductive.Store.subscribe
  SimpleStore.store (fun () => Js.log (Reductive.Store.getState SimpleStore.store));

/* 绑定SimpleStore 默认的reducer:countReducer */
let simpleDispatch = Reductive.Store.dispatch SimpleStore.store;

simpleDispatch Increment;

simpleDispatch Increment;

simpleDispatch Increment;

simpleDispatch Increment;

simpleDispatch Decrement;

simpleDispatch Increment;

/* the result is 14 */
Reductive.Store.replaceReducer SimpleStore.store SimpleStore.doubleCountReducer;

simpleDispatch Increment;

simpleDispatch Increment;

simpleDispatch Increment;

simpleDispatch Increment;

/* the result is 22 */
let complexDispath = Reductive.Store.dispatch ComplexStore.store;

complexDispath (ComplexStore.StringAction A);

complexDispath (ComplexStore.StringAction A);

complexDispath (ComplexStore.StringAction B);

complexDispath (ComplexStore.StringAction B);

complexDispath (ComplexStore.CountAction Increment);

complexDispath (ComplexStore.CountAction Increment);

complexDispath (ComplexStore.CountAction Increment);

complexDispath (ComplexStore.CountAction Increment);
/* the result is {counter:4,notCount:'fckaabb'} */

let compleState = Reductive.Store.getState ComplexStore.store;

Js.log compleState.counter;
Js.log compleState.notCount;