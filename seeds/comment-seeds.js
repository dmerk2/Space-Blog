const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    comment_text: "Reading Lips!",
    post_id: 1,
    comment_id: 1,
  },
  {
    user_id: 2,
    comment_text: "How high are you?",
    post_id: 2,
    comment_id: 2,
  },
  {
    user_id: 3,
    comment_text: "Let me get some of what you are smoking",
    post_id: 3,
    comment_id: 3,
  },
  {
    user_id: 4,
    comment_text: "we are definitely not alone...",
    post_id: 4,
    comment_id: 4,
  },
  {
    user_id: 5,
    comment_text: "wtf",
    post_id: 5,
    comment_id: 5,
  },
  {
    user_id: 6,
    comment_text: "damn birds",
    post_id: 6,
    comment_id: 6,
  },
  {
    user_id: 7,
    comment_text: "How can someone not eat meat!?",
    post_id: 7,
    comment_id: 7,
  },
  {
    user_id: 8,
    comment_text: "1 long hole",
    post_id: 8,
    comment_id: 8,
  },
  {
    user_id: 9,
    comment_text: "I doubt it",
    post_id: 9,
    comment_id: 9,
  },
  {
    user_id: 9,
    comment_text: "me too",
    post_id: 3,
    comment_id: 9,
  },
  {
    user_id: 9,
    comment_text: "Don't hate on birds",
    post_id: 6,
    comment_id: 9,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
