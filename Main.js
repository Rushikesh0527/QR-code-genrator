const input = document.getElementById("input");
const Img = document.getElementById("image");
var newAttribute =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bing.com";

let run = () => {
  console.log(input.value);
  var newAttribute = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  console.log(newAttribute);
  document.querySelectorAll("img")[0].setAttribute("src", newAttribute);
};
