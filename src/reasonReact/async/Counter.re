type action =
  | Tick;

type state = {
  count: int,
  timerId: ref (option Js.Global.intervalId)
};

let component = ReasonReact.reducerComponent "Counter";

let make _children => {
  ...component,
  initialState: fun () => {count: 0, timerId: ref None},
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
  render: fun {state: {count}} => {
    let timesMessage = count == 1 ? "second" : "seconds";
    let greet = {j|Tou sepnd $count $timesMessage on this page!|j};
    <div>(ReasonReact.stringToElement greet)</div>
  }
};