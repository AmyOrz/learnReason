type countAction =
  | Increment
  | Decrement;

let countReducer state action =>
  switch action {
  | Increment => state + 1
  | Decrement => state - 1
  };

let doubleCountReducer state action =>
  switch action {
  | Increment => state + 2
  | Decrement => state - 2
  };

let store = Reductive.Store.create reducer::countReducer preloadedState::10 ();