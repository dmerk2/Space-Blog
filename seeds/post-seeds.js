const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Think about this!",
    comment_text: "If you were born deaf, what language would you think in?",
    user_id: 1,
  },
  {
    id: 2,
    title: "Do you like X-Men?",
    comment_text:
      "If Professor X can move objects with his mind, why can't he make his legs move?",
    user_id: 2,
  },
  {
    id: 3,
    title: "Hmmmm",
    comment_text:
      "If two telepaths read each other's mind, whose mind are they reading?",
    user_id: 3,
  },
  {
    id: 4,
    title: "What do you think?",
    comment_text:
      "Two possibilities exist: either we are alone in the universe, or we are not. Both are equally terrifying.",
    user_id: 4,
  },
  {
    id: 5,
    title: "WAIT WHAT!?",
    comment_text:
      "The hospital you were born in is the only building you leave without entering",
    user_id: 5,
  },
  {
    id: 6,
    title: "Have you ever thought about this?",
    comment_text: "Humans cut down bird houses to MAKE birdhouses!",
    user_id: 6,
  },
  {
    id: 7,
    title: "Actual question...",
    comment_text: "If two vegans are fighting, is it still considered beef?",
    user_id: 7,
  },
  {
    id: 8,
    title: "???",
    comment_text: "Does a straw have one or two holes?",
    user_id: 8,
  },
  {
    id: 9,
    title: "Good question!",
    comment_text: "Is there a synonym for synonym?",
    user_id: 9,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
