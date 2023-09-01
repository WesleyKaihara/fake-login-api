const express = require("express")

const UserRouter = express.Router()

UserRouter.get("/user/details", (req,res) => {
  res.json("user")
})

module.exports = UserRouter
