const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    username: "hightimes@aol.com",
    password: "password12345",
  },
  {
    user_id: 2,
    username: "burntout420@hotmail.com",
    password: "password12345",
  },
  {
    user_id: 3,
    username: "letssmoke@gmail.com",
    password: "password12345",
  },
  {
    user_id: 4,
    username: "cheech@chong.com",
    password: "password12345",
  },
  {
    user_id: 5,
    username: "bluntz@yahoo.com",
    password: "password12345",
  },
  {
    user_id: 6,
    username: "joints@bing.com",
    password: "password12345",
  },
  {
    user_id: 7,
    username: "weed@bowls.com",
    password: "password12345",
  },
  {
    user_id: 8,
    username: "pot@bongs.com",
    password: "password12345",
  },
  {
    user_id: 9,
    username: "maryjane@glass.com",
    password: "password12345",
  },
  {
    user_id: 10,
    username: "grass@bing.com",
    password: "password12345",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;