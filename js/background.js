const images = [
  "DMC5_Clear_Bonus_Art_1.webp",
  "DMC5_Clear_Bonus_Art_2.webp",
  "DMC5_Clear_Bonus_Art_3.webp",
  "DMC5_Clear_Bonus_Art_4.webp",
  "DMC5_Clear_Bonus_Art_6.webp",
  "DMC5_Clear_Bonus_Art_7.webp",
  "DMC5_Clear_Bonus_Art_8.webp",
  "DMC5_Clear_Bonus_Art_9.webp",
  "DMC5_Clear_Bonus_Art_10.webp",
  "DMC5_Clear_Bonus_Art_11.webp",
  "DMC5_Clear_Bonus_Art_12.webp",
  "DMC5_Clear_Bonus_Art_13.webp",
  "DMC5_Clear_Bonus_Art_14.webp",
  "DMC5_Clear_Bonus_Art_15.webp",
  "DMC5_Clear_Bonus_Art_16.webp",
  "DMC5_Clear_Bonus_Art_17.webp",
  "DMC5_Clear_Bonus_Art_18.webp",
  "DMC5_Clear_Bonus_Art_19.webp",
  "DMC5_Clear_Bonus_Art_20.webp",
  "DMC5_Clear_Bonus_Art_21.webp",
  "DMC5_Clear_Bonus_Art_22.webp",
  "DMC5_Clear_Bonus_Art_23.webp",
  "DMC5_Clear_Bonus_Art_24.webp",
  "DMC5_Clear_Bonus_Art_26.webp",
  "DMC5_Clear_Bonus_Art_27.webp",
  "DMC5_Clear_Bonus_Art_28.webp",
  "DMC5_Clear_Bonus_Art_29.webp",
  "DMC5_Clear_Bonus_Art_30.webp",
  "DMC5_Clear_Bonus_Art_31.webp",
  "DMC5_Clear_Bonus_Art_32.webp",
  "DMC5_Clear_Bonus_Art_33.webp",
  "DMC5_Clear_Bonus_Art_34.webp",
  "DMC5_Keyart_Spread_Logo.webp",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "background";

document.body.appendChild(bgImage);
