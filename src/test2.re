open Fetch;

type imageElement;

external document : Dom.document = "" [@@bs.val];

external createImg : Dom.document => _ [@bs.as "img"] => imageElement =
  "createElement" [@@bs.send];

external getElementById : Dom.document => string => Dom.element = "" [@@bs.send];

external imageElementToJsObj : imageElement => Js.t {..} = "%identity";

external elementToJsObj : Dom.element => Js.t {..} = "%identity";

let url = "./src/test.json";

let createImgDomByUrl url => {
  let img = createImg document;
  let container = getElementById document "index";
  (imageElementToJsObj img)##src#=url;
  (elementToJsObj container)##appendChild img
};

let showImg (imgItem: ImgParse.imgItem) =>
  imgItem |> (fun value => value.media) |> (fun value => value.m) |> createImgDomByUrl;

let getItems (res: ImgParse.imgArr) => res.items;

let renderImg text =>
  ImgParse.getResult text |> (fun value => value.items) |> (fun res => Array.iter showImg res);

Js.Promise.(fetch url |> then_ Response.text |> then_ (fun text => renderImg text |> resolve));