type action =
  | Tick;

type state = {
  count: int,
  timerId: ref (option Js.Global.intervalId),
  myInputRef: ref (option Dom.element)
};

let setInputRef theRef {ReasonReact.state: state} => state.myInputRef := Js.Null.to_opt theRef;

let component = ReasonReact.reducerComponent "Counter";

let make ::name _children => {
  ...component,
  initialState: fun () => {count: 0, timerId: ref None, myInputRef: ref None},
  reducer: fun action state =>
    switch action {
    | Tick => ReasonReact.Update {...state, count: state.count + 1}
    },
  didMount: fun self => {
    self.state.timerId := Some (Js.Global.setInterval (self.reduce (fun _ => Tick)) 1000);
    ReasonReact.NoUpdate
  },
  willUnmount: fun {state} =>
    switch !state.timerId {
    | Some id => Js.Global.clearInterval id
    | _ => ()
    },
  render: fun {state, handle} => {
    let count = state.count;
    let timesMessage = count == 1 ? "second" : "seconds";
    let greet = {j|hi,$name sepnd $count $timesMessage on this page!|j};
    <div> <input ref=(handle setInputRef) /> </div>
  }
};