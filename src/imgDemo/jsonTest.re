type line = {
  start: array point,
  end_: array point,
  thickness: option int
}
and point = {
  x: float,
  y: float
};

module Decode = {
  let point json => Json.Decode.{x: json |> field "x" float, y: json |> field "y" float};
  let line json =>
    Json.Decode.{
      start: json |> field "start" (array point),
      end_: json |> field "end" (array point),
      thickness: json |> optional (field "thickness" int)
    };
};

let data = {| {
    "start": [{ "x": 1.8, "y": -0.5 },{ "x": 1.3, "y": -0.4 },{ "x": 1.0, "y": -0.4 }],
    "end": [{ "x": 1.1, "y": -0.4 },{ "x": 1.1, "y": -0.4 },{ "x": 1.1, "y": -0.4 }]
  } |};

let log message => Js.log message;

let getParseData result => result |> Js.Json.parseExn;

let line = getParseData data |> Decode.line;


Js.log line;

Array.iter log line.start;
