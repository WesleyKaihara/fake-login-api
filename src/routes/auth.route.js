import express from "express"
import bcrypt from "bcrypt"

const AuthRouter = express.Router()

import { getUserByEmail } from '../services/user.service.js'

AuthRouter.post("/login", (req,res) => {
  const { email, password } = req.body
  
  try {
    // Validar com lib depois
    if(!email || !password)  {
      throw new Error("Email and Password required!!")
    }

    const user = getUserByEmail("admin@email.com")
    if(!user) throw new Error("Not Authorized")

    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword) throw new Error("Not Authorized")

    res.status(200).json({ 
      status: "OK",
      message: "Successful Login"
    })
  } catch (error) {
    res.status(401).json({ message: error.message });
  }

})

export default AuthRouter
