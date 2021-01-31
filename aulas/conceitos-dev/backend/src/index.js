const { response } = require("express");
const express = require("express");

const app = express();

app.get("/projects", (_, response) => {
  // return response.send("Hello world!");
  return response.json({message: "Hello world!"});
});

// O Port tem de ser acima da 80
app.listen(3333);