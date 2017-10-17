type imgArr = {items: array imgItem}
and imgItem = {media: imgUrl}
and imgUrl = {m: string};

module Decode = {
  let imgUrl json => Json.Decode.{m: json |> field "m" string};
  let imgItem json => Json.Decode.{media: json |> field "media" imgUrl};

  let imgArr json => Json.Decode.{items:json |> field "items" (array imgItem)};
};

let getResult result => result |> Js.Json.parseExn |> Decode.imgArr;
