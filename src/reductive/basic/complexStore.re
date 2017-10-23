open SimpleStore;

type stringAction =
  | A
  | B;

let stringReducer state action =>
  switch action {
  | A => state ^ "a"
  | B => state ^ "b"
  };

type appAction =
  | StringAction stringAction
  | CountAction countAction;

type appState = {
  counter: int,
  notCount: string
};

let appReducer state action =>
  /* 在方法内部直接了reducer,返回相应的数据 */
  switch action {
  | StringAction action => {...state, notCount: stringReducer state.notCount action}
  | CountAction action => {...state, counter: countReducer state.counter action}
  };

let store =
  Reductive.Store.create
    reducer::appReducer
    preloadedState::{counter: 0, notCount: "fck"}
    enhancer::Middleware.logger
    ();