const mongoose = require("mongoose");
const mongooseurl = "mongodb://localhost/usersInfos";

const db = mongoose.connect(mongooseurl, {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
