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
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;