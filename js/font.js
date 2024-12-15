const dmc5Font = new FontFace("DMC5", "url(fonts/DMC5Font.otf)");

function changeFont(selector, fontFamily) {
  document.querySelectorAll(selector).forEach((htmlElement) => {
    htmlElement.style.fontFamily = fontFamily;
  });
}

dmc5Font
  .load()
  .then(function (data) {
    document.fonts.add(data);
    document.body.style.fontFamily = data.family;
    changeFont("input", data.family);
    changeFont("button", data.family);
  })
  .catch(function (err) {
    console.log(err);
  });
