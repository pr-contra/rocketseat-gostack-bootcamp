const { response } = require("express");
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get("/projects", (_, response) => {
  // return response.send("Hello world!");
  return response.json({message: "Hello world!"});
});

// O Port tem de ser acima da 80
app.listen(process.env.PORT, () => { console.log(`Listening to port ${process.env.PORT}`) });