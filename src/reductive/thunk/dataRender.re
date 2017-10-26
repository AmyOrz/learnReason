let component = ReasonReact.statelessComponent "DataRenderer";

let make state::(state: ThunkedStore.appState) ::dispatch _children => {
  let incrementIfOdd
      (store: Reductive.Store.t (ReduxThunk.thunk ThunkedStore.appState) ThunkedStore.appState) =>
    switch (Reductive.Store.getState store) {
    | {count} when count mod 2 === 1 =>
      Reductive.Store.dispatch store (ThunkedStore.CountAction SimpleStore.Increment)
    | _ => ()
    };
  let incrementAsync store =>
    ignore (
      Js.Global.setTimeout
        (fun () => Reductive.Store.dispatch store (ThunkedStore.CountAction SimpleStore.Increment))
        1000
    );
  {
    ...component,
    render: fun _self =>
      <div>
        <div> (ReasonReact.stringToElement ("String:" ^ state.notAcount)) </div>
        <div> (ReasonReact.stringToElement ("Count:" ^ string_of_int state.count)) </div>
        <button onClick=(fun _ => dispatch (ThunkedStore.CountAction SimpleStore.Increment))>
          (ReasonReact.stringToElement "Increment")
        </button>
        <button onClick=(fun _ => dispatch (ThunkedStore.CountAction SimpleStore.Decrement))>
          (ReasonReact.stringToElement "Dncrement")
        </button>
        <button onClick=(fun _ => dispatch (ThunkedStore.StringAction ThunkedStore.A))>
          (ReasonReact.stringToElement "Add a")
        </button>
        <button onClick=(fun _ => dispatch (ThunkedStore.StringAction ThunkedStore.B))>
          (ReasonReact.stringToElement "Add b")
        </button>
        <button onClick=(fun _ => dispatch (ReduxThunk.Thunk incrementAsync))>
          (ReasonReact.stringToElement "increment async")
        </button>
        <button onClick=(fun _ => dispatch (ReduxThunk.Thunk incrementIfOdd))>
          (ReasonReact.stringToElement "increment if odd")
        </button>
      </div>
  }
};