const express = require("express");
const PORT = process.env.PORT || 3000;
var app = express();
var bodyParser = require("body-parser");
const {User} = require("../database/Suser.js");
const {Blogs} = require("../database/Suser.js");
const {Profil} = require("../database/Suser.js")
const db = require("../database/index.js");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

// use body parser as middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the dist folder and render indesx inside it.
app.use(express.static(__dirname + "/../client/dist"));


// save data to database.
app.post("/users/info", (req, res) => {
  console.log(req.body);
  var user = new User(req.body);
  user
    .save()
    .then((response) => {
      console.log(response)
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
});

// sav eblogs to database.
app.post("/users/blogs", (req, res) => {
  var blogs = new Blogs(req.body);
  blogs
    .save({})
    .then((result) => res.send(result.data))
    .catch((err) => {
      console.log(err);
    });
});

app.post("/users/profile",(req, res) => {
  var pro = new Profil(req.body);
  pro.save({}).then((result) => res.send(result.data))
  .catch((err) =>{
    console.log(err)
  })
})

app.post("/user/info",(req,res) => { 
  User.find({}).then((user) =>{
    const dataInfo = user.data;
    for (var key in dataInfo){
      console.log(dataInfo[key])
      console.log(req.body);
    }

  })
})

app.get("/api/blogs", (req, res) => {
  Blogs.find({})
    .then((blogs) => res.send(blogs))
    .catch((err) => console.log(err));
});


// use api for the database.
app.get("/api/users", function (req, res) {
  User.find({})
    .then((result) => res.send(result))
    .catch((err) => console.log("err", err));
});

// listen to the server.
app.listen(PORT, function () {
  console.log(`HARD TIME IN ${PORT}!`);
});
