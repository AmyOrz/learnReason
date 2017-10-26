open SimpleStore;

type stringAction =
  | A
  | B;

let stringReduce state action =>
  switch action {
  | A => state ^ "a"
  | B => state ^ "b"
  };

type appState = {
  count: int,
  notCount: string
};

type ReduxThunk.thunk _ +=
  | StringAction stringAction
  | CountAction countAction;

type ReduxThunk.thunk 'a +=
  | ReplaceState 'a;

let appReducer (state: appState) action =>
  switch action {
  | StringAction action => {...state, notCount: stringReduce state.notCount action}
  | CountAction action => {...state, count: countReducer state.count action}
  | ReplaceState replaceState => replaceState
  | _ => state
  };

type ReduxThunk.thunk _ +=
  | TravelBackward
  | TravelForward;

let past = ref (Immutable.Stack.empty ());

let future = ref (Immutable.Stack.empty ());

let goBack currentState =>
  switch (Immutable.Stack.first !past) {
  | Some lastState =>
    future := Immutable.Stack.addFirst currentState !future;
    if (Immutable.Stack.isNotEmpty !past) {
      past := Immutable.Stack.removeFirstOrRaise !past
    };
    lastState
  | None => currentState
  };