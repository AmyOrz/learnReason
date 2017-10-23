type todo = {
  id: string,
  title: string,
  completed: bool
};

type state = {
  editText: string,
  editing: bool,
  editFieldRef: ref (option Dom.element)
};

type action =
  | Edit
  | Submit
  | KeyDown int
  | Change string;

let component = ReasonReact.reducerComponent "TodoItemRe";

let setEditFieldRef r {ReasonReact.state: state} => state.editFieldRef := Js.Null.to_opt r;

let make ::todo ::editing ::onDestroy ::onSave ::onEdit ::onToggle ::onCancel _children => {
  let submitHelper state =>
    switch (Js.String.trim state.editText) {
    | "" => ReasonReact.SideEffects (fun _self => onDestroy ())
    | nonEmptyValue =>
      ReasonReact.UpdateWithSideEffects
        {...state, editText: nonEmptyValue} (fun _self => onSave nonEmptyValue)
    };
  let submit _event => Submit;
  let keyDown event => KeyDown (ReactEventRe.Keyboard.which event);
  let change event => Change (ReactDOMRe.domElementToObj (ReactEventRe.Form.target event))##value;
  let edit _event => {
    onEdit ();
    Edit
  };
  {
    ...component,
    initialState: fun () => {editText: todo.title, editFieldRef: ref None, editing},
    reducer: fun action state =>
      switch action {
      | Edit => ReasonReact.Update {...state, editText: todo.title}
      | Submit => submitHelper state
      | Change text =>
        Js.log editing;
        editing ? ReasonReact.Update {...state, editText: text} : ReasonReact.NoUpdate
      | KeyDown 27 =>
        /* escape key */
        ReasonReact.UpdateWithSideEffects
          {...state, editText: todo.title} (fun _self => onCancel ())
      | KeyDown 13 =>
        /* enter key */
        submitHelper state
      | KeyDown _ => ReasonReact.NoUpdate
      },
    /* not update state,simply return previous state  */
    /* 这里跟新editing状态为了使双击label之后可以快速的进行输入操作,可以注释下面2个方法看效果 */
    willReceiveProps: fun {state} => {...state, editing},
    didUpdate: fun {oldSelf, newSelf} =>
      switch (oldSelf.state.editing, newSelf.state.editing, !newSelf.state.editFieldRef) {
      | (false, true, Some field) =>
        let node = ReactDOMRe.domElementToObj field;
        Js.log node;
        /* ignore　忽略它的返回值 */
        node##focus () |> ignore;
        node##setSelectionRange node##value##length node##value##length |> ignore
      | _ => ()
      },
    render: fun {state, handle, reduce} => {
      let className =
        Js.Array.joinWith " " [| todo.completed ? "completed" : "", editing ? "editing" : "" |];
      <li className>
        <div className="view">
          <input
            className="toggle"
            _type="checkbox"
            checked=(Js.Boolean.to_js_boolean todo.completed)
            onChange=(fun _ => onToggle ())
          />
          <label onDoubleClick=(reduce edit)> (ReasonReact.stringToElement todo.title) </label>
          <button className="destroy" onClick=(fun _ => onDestroy ()) />
        </div>
        <input
          ref=(handle setEditFieldRef)
          className="edit"
          value=state.editText
          onBlur=(reduce submit)
          onChange=(reduce change)
          onKeyDown=(reduce keyDown)
        />
      </li>
    }
  }
};