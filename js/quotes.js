const quotes = [
  {
    quote: "Break this heavy chain, That does freeze my bones around!",
    from: "Earth's Answers",
  },
  {
    quote: "But the following Contraries to these are True.",
    from: "The Voice of the Devil",
  },
  {
    quote: "I have no name; I am but two days old...",
    from: "Infant Joy",
  },
  {
    quote:
      "The Angel that presided 'oer my birth said, \"Little creature, form'd of Joy and Mirth, Go love without the help of any Thing on Earth.\"",
    from: "The Angel that presided 'oer my birth",
  },
  {
    quote:
      "To see a World in a Grain of Sand and a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour.",
    from: "Auguries of Innocence",
  },
  {
    quote:
      "I curse my stars in bitter grief and woe, That made my love so high and me so low.",
    from: "When early morn walks forth in sober grey",
  },
  {
    quote: "Little wanderer, hie thee home!",
    from: "A Dream",
  },
  {
    quote: "He who desires but acts not, breeds pestilence.",
    from: "Proverbs of Hell",
  },
  {
    quote:
      "As the air to a bird or the sea to a fish, so is contempt to the contemptible.",
    from: "Proverbs of Hell",
  },
  {
    quote: "If the fool would persist in his folly he would become wise.",
    from: "Proverbs of Hell",
  },
  {
    quote: "The cut worm forgives the plow.",
    from: "Proverbs of Hell",
  },
  {
    quote: "One thought, fills immensity.",
    from: "Proverbs of Hell",
  },
  {
    quote:
      "The hours of folly are measur’d by the clock, but of wisdom: no clock can measure.",
    from: "Proverbs of Hell",
  },
  {
    quote: "While thy branches mix with mine, and our roots together join.",
    from: "Love and harmony combine",
  },
];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
from.innerText = `- ${todaysQuote.from} -`;
