const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    username: "hightimes",
    email: "hightimes@aol.com",
    password: "password12345",
  },
  {
    user_id: 2,
    username: "burntout",
    email: "burntout420@hotmail.com",
    password: "password12345",
  },
  {
    user_id: 3,
    username: "lets_smoke",
    email: "letssmoke@gmail.com",
    password: "password12345",
  },
  {
    user_id: 4,
    username: "cheech@chong.com",
    email: "cheech&chong",
    password: "password12345",
  },
  {
    user_id: 5,
    username: "puffPuffPass",
    email: "bluntz@yahoo.com",
    password: "password12345",
  },
  // {
  //   user_id: 6,
  //   username: "joint_time",
  //   email: "bluntz@yahoo.com",
  //   password: "password12345",
  // },
  {
    user_id: 7,
    username: "reeeeeefer",
    email: "weed@bowls.com",
    password: "password12345",
  },
  {
    user_id: 8,
    username: "bowls&bongs",
    email: "bowlsandbongs@gmail.com",
    password: "password12345",
  },
  {
    user_id: 9,
    username: "maryJane",
    email: "maryjane@glass.com",
    password: "password12345",
  },
  {
    user_id: 10,
    username: "grass",
    email: "grass@bing.com",
    password: "password12345",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;