type tainedProps = {message:string};

let component = ReasonReact.statelessComponentWithRetainedProps "RetainedProps";

let make ::message _children => {
  ...component,
  retainedProps: {message: message},
  didUpdate: fun {oldSelf, newSelf} =>
    if (oldSelf.retainedProps.message !== newSelf.retainedProps.message) {
      Js.log "the component props is change"
    },
  render: fun _self => <div> (ReasonReact.stringToElement message) </div>
};