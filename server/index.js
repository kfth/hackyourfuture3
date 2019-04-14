// Express routing middleware
const express = require("express");
// creating instance of express
const app = express();
//local file navigation
const path = require("path");
//port
const port = 4200;

// root
const DIR = "/Users/daddy/code/hackyourfuture3/";

const database = {
  people: [
    {
      id: 2,
      name: "nick",
      title: "the king",
      password: "123456!",
      profileUrl: "http://placekitten.com/200/300"
    },
    {
      id: 321,
      name: "nick2",
      title: "the monster",
      password: "123456!",
      profileUrl: "http://placekitten.com/200/300"
    },
    {
      id: 321351234,
      name: "nick3",
      title: "the legend",
      password: "123456!",
      profileUrl: "http://placekitten.com/200/300"
    }
  ]
};

// sets our server to look for all /whatever in the build directory
app.use(express.static(path.join(DIR, "build")));

// Serves our react app
app.get("/", (req, res) => {
  res.sendFile(path.join(DIR, "build", "index.html"));
});

// RESTFUL API ENDPOINT
app.get("/people/all", (req, res) => res.send(database.people));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
