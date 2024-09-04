const quoteDB = [
  { quote: "人の夢は!!!終わらねェ!!!!", author: "マーシャル・D・ティーチ" },
  { quote: "海賊王に, おれはなる!!!!", author: "モンキー・D・ルフィ" },
  { quote: "生ぎたいっ!!!!", author: "ニコ・ロビン" },
  { quote: "おれはもう!! 二度と敗けねェから!!!!", author: "ロロノア・ゾロ" },
  {
    quote:
      "人はいつ死ぬと思う…? 心臓を銃で撃ち抜かれた時……違う 不治の病に犯された時……違う 猛毒キノコのスープを飲んだ時……違う!!! …人に忘れられた時さ…!!!",
    author: "Dr.ヒルルク",
  },
  {
    quote: "チョッパー一つ覚えておけ女のウソは許すのが男だ",
    author: "ヴィンスモーク・サンジ",
  },
  { quote: "危機感なくして成長はない", author: "キュロス" },
  {
    quote: "いつかまた会えたら!!! もう一度仲間と呼んでくれますか!!!?",
    author: "ネフェルタリ・ビビ",
  },
  {
    quote: "お前にできねェ事はおれがやる おれにできねェ事をお前がやれ!!!",
    author: "ヴィンスモーク・サンジ",
  },
  {
    quote: "友達だからようっ!!!! 理由なんざ他にゃいらねェ!!!!",
    author: "ボン・クレー",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const slectedQuote = quoteDB[Math.floor(Math.random() * quoteDB.length)];

quote.innerText = slectedQuote.quote;
author.innerText = slectedQuote.author;
