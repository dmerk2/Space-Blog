const { Post } = require("../models");

const postData = [
  {
    title: "What's your favorite strain?",
    content: "SOUR DIESEL!!!!",
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;