open Fetch;

let getUrl = "./src/test.json";

let renderImg json => json |> (fun json => json.item);

Js.Promise.(fetch getUrl |> then_ Response.json |> then_ (fun json => renderImg json |> resolve));