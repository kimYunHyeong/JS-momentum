const quoteDB = [
  {
    quote: "人の夢は!!!終わらねェ!!!!",
    author: "マーシャル・D・ティーチ",
    bgImg: "0.png",
  },
  {
    quote: "海賊王に, おれはなる!!!!",
    author: "モンキー・D・ルフィ",
    bgImg: "1.png",
  },
  { quote: "生ぎたいっ!!!!", author: "ニコ・ロビン", bgImg: "2.png" },

  {
    quote: "おれはもう!! 二度と敗けねェから!!!!",
    author: "ロロノア・ゾロ",
    bgImg: "3.png",
  },
  {
    quote:
      "人はいつ死ぬと思う…? 心臓を銃で撃ち抜かれた時……違う 不治の病に犯された時……違う 猛毒キノコのスープを飲んだ時……違う!!! …人に忘れられた時さ…!!!",
    author: "Dr.ヒルルク",
    bgImg: "4.png",
  },
  {
    quote: "チョッパー一つ覚えておけ女のウソは許すのが男だ",
    author: "ヴィンスモーク・サンジ",
    bgImg: "5.png",
  },
  { quote: "危機感なくして成長はない", author: "キュロス", bgImg: "6.png" },
  {
    quote: "いつかまた会えたら!!! もう一度仲間と呼んでくれますか!!!?",
    author: "ネフェルタリ・ビビ",
    bgImg: "7.png",
  },
  {
    quote: "お前にできねェ事はおれがやる おれにできねェ事をお前がやれ!!!",
    author: "ヴィンスモーク・サンジ",
    bgImg: "8.png",
  },
  {
    quote:
      "おれのやりたかった事全部できる…!!これがおれの最高地点だ…これだ…!!!ギア5!!!!!",
    author: "モンキー・D・ルフィ",
    bgImg: "9.png",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const bg = document.querySelector("body");

const selectedQuote = quoteDB[Math.floor(Math.random() * quoteDB.length)];

quote.innerText = selectedQuote.quote;
author.innerText = `-${selectedQuote.author}-`;
bg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/${selectedQuote.bgImg})`;
