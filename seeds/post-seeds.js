const { Post } = require("../models");

const postData = [
  {
    title: "Think about this!",
    content: "If you were born deaf, what language would you think in?",
    user_id: 1,
  },
  {
    title: "Do you like X-Men?",
    content:
      "If Professor X can move objects with his mind, why can't he make his legs move?",
    user_id: 2,
  },
  {
    title: "Hmmmm?",
    content:
      "If two telepaths read each other's mind, whose mind are they reading?",
    user_id: 3,
  },
  {
    title: "ALIENS EXIST!",
    content:
      "If the universe is always expanding, does that mean that the amount of space available for that expansion is infinite?",
    user_id: 4,
  },
  {
    title: "Which do you choose?",
    content:
      "“Two possibilities exist: either we are alone in the universe, or we are not. Both are equally terrifying.” Pick one.",
    user_id: 5,
  },
  {
    title: "Just wondering...",
    content: "Is a hot dog a sandwich?",
    user_id: 6,
  },
  {
    title: "Animals!",
    content:
      "If freedom is simply being able to do what you want, are animals freer than humans?",
    user_id: 7,
  },
  {
    title: "HHAT!?",
    content:
      "The hospital you were born in is the only building you leave without entering",
    user_id: 8,
  },
  {
    title: "Have you ever thought this?",
    content:
      "Humans cut down bird houses to MAKE birdhouses!",
    user_id: 9,
  },
  {
    title: "Actual question...",
    content:
      "If two vegans are fighting, is it still considered beef?",
    user_id: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;