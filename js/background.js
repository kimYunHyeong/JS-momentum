const backgroundImgDB = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png"];

const slectedBackground =
  backgroundImgDB[Math.floor(Math.random() * backgroundImgDB.length)];

const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${slectedBackground}`;
backgroundImg.className = "background-img";

document.body.appendChild(backgroundImg);
