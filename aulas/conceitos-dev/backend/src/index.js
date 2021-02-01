const express = require("express");

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

/**
 * Metodos HTTP:
 *
 * GET: Get data from backend
 * POST: Create info into backend
 * PUT/PATCH: Update info in backend
 * DELETE: Delete info in backend
 */

 /**
  * Types of params:
  *
  * Query params: Filters and pagination
  * Route params: Identify resources (Update/Delete)
  * Request body: Content to be Created/Updated
  */

app.get("/projects", (request, response) => {
  const params = request.params;
  const {title, owner} = request.query;
  const body = request.body;

  console.log({title, owner});
  // return response.send("Hello world!");
  return response.json({message: "Hello world!"});
});

app.post("/projects", (request, response) => {
  // return response.status(201).send("Created!");
  return response.json(["project1","project2"]);
});

app.put("/projects/:id", (request, response) => {
  // return response.status(201).send("Created!");
  return response.json(["project1","project2"]);
});

app.delete("/projects/:id", (request, response) => {
  // return response.status(201).send("Created!");
  return response.json(["project1","project2"]);
});

// O Port tem de ser acima da 80
app.listen(process.env.PORT, () => { console.log(`Listening to port ${process.env.PORT}`) });
