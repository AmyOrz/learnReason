open Fetch;

type imageElement;

external document : Dom.document = "" [@@bs.val];

external createImg : Dom.document => _ [@bs.as "img"] => imageElement =
  "createElement" [@@bs.send];

external getElementById : Dom.document => string => Dom.element = "" [@@bs.send];

external imageElementToJsObj : imageElement => Js.t {..} = "%identity";

external elementToJsObj : Dom.element => Js.t {..} = "%identity";

let createImgAndInsertDom url => {
  let img = createImg document;
  let container = getElementById document "index";
  (imageElementToJsObj img)##src#=url;
  (elementToJsObj container)##appendChild img
};

let showImg (imgItem: ImgParse.imgItem) =>
  imgItem |> (fun value => value.media) |> (fun value => value.m) |> createImgAndInsertDom;

let renderImg text => ImgParse.getResult text |> (fun value => value.items) |> Array.iter showImg;

let url = "./src/test.json";

Js.Promise.(fetch url |> then_ Response.text |> then_ (fun text => renderImg text |> resolve));