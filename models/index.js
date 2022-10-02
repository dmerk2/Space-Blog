const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  hooks: true,
});

Comment.belongsTo(User, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
  hooks: true,
});

Comment.belongsTo(Post, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
  hooks: true,
  // scope: {
  //   commentableType: 'comment'
  // }
});

Post.belongsTo(User, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
