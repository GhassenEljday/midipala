const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

var userBlogsS = new mongoose.Schema({
  paragraph: String,
  imgUrl: String,
});

var profile = new mongoose.Schema({
  picUrl: String,
  bio: String,
});

const UsersInfo = mongoose.model("user", userSchema);
const userBlogs = mongoose.model("blogs", userBlogsS);
const profl = mongoose.model("profile", profile);

module.exports.User = UsersInfo;
module.exports.Blogs = userBlogs;
module.exports.Profil = profl;