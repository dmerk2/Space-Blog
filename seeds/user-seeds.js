const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    username: "hightimes@letsgethigh.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;