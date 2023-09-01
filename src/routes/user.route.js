import express from "express"
const UserRouter = express.Router()

UserRouter.get("/user/details", (req,res) => {
  res.json("user")
})


export default UserRouter