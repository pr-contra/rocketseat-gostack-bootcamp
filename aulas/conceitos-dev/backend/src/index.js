const express = require("express");
const { v4: uuidv4 } = require("uuid");

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

const projects = [];

app.get("/projects", (request, response) => {
  const { title } = request.query;

  console.log(title);

  const result = title ?
    projects.filter(p => p.title.includes(title)) : projects;

  return response.json(result);
});

app.post("/projects", (request, response) => {
  const {title, owner} = request.body;

  const project = { id: uuidv4(), title, owner };
  projects.push(project);

  return response.status(201).send();
});

app.put("/projects/:id", (request, response) => {
  const {id} = request.params;
  const {title, owner} = request.body;

  const projectIndex = projects.findIndex(p => p.id === id);

  if(projectIndex < 0){
    return response.status(400).json( {error: "Project not found."} );
  }

  // projects[projectIndex] = {id: id, title: title, owner: owner};
  // OR
  projects.splice(projectIndex,1,{id: id, title: title, owner: owner});

  return response.json(projects);
});

app.delete("/projects/:id", (request, response) => {
  const {id} = request.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  if(projectIndex < 0){
    return response.status(400).json( {error: "Project not found."} );
  }

  projects.splice(projectIndex,1);

  return response.send(204).send();
});

// O Port tem de ser acima da 80
app.listen(process.env.PORT, () => { console.log(`Listening to port ${process.env.PORT}`) });
