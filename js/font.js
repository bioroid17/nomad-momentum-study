const dmc5Font = new FontFace("DMC5", "/fonts/Devil_May_Cry_5.ttf");

dmc5Font
  .load()
  .then(function () {
    console.log("DMC5 font loaded!");
  })
  .catch(function () {
    console.log("Failed to load font");
  });
