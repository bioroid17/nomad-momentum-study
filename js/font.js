const dmc5Font = new FontFace("DMC5", "url(fonts/DMC5Font.otf)");

dmc5Font
  .load()
  .then(function (data) {
    document.fonts.add(data);
    document.body.style.fontFamily = data.family;
  })
  .catch(function (err) {
    console.log(err);
  });
