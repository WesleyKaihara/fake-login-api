import UserRouter from './src/routes/user.route.js';
import AuthRouter from './src/routes/auth.route.js';

import express from 'express';
const server = express();

server.use(express.json());
server.use(UserRouter);
server.use(AuthRouter);

server.get("*", (req,res) => {
  res.status(404).send("Not Found");
});

export default server