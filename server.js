const express = require("express")
const UserRouter = require("./src/routes/user.route")
const AuthRouter = require("./src/routes/auth.route.js")

const server = express();

server.use(express.json());
server.use(UserRouter);
server.use(AuthRouter);

server.get("*", (req,res) => {
  res.status(404).send("Not Found");
});

module.exports = server
