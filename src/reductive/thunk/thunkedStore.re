open SimpleStore;

type stringAction =
  | A
  | B;

let stringReducer state action =>
  switch action {
  | A => state ^ "a"
  | B => state ^ "b"
  };

type ReduxThunk.thunk _ +=
  | StringAction stringAction
  | CountAction countAction;

type appState = {
  count: int,
  notAcount: string
};

let appReducer state action =>
  switch action {
  | StringAction action => {...state, notAcount: stringReducer state.notAcount action}
  | CountAction action => {...state, count: countReducer state.count action}
  | _ => state
  };

let thunkedLogger store next => next |> Middleware.logger store |> Middleware.thunk store;

let store =
  Reductive.Store.create
    reducer::appReducer preloadedState::{count: 0, notAcount: "fck"} enhancer::thunkedLogger ();