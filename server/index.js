const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

const loginController = require("./controllers/loginController");

app.get("auth/login", loginController.login);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
