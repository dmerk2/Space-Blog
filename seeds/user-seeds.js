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
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;