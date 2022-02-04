const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/api/v1/users", (req, res) => {
  res.send("users");
});

app.get("/api/v1/products", (req, res) => {
  res.json({
    name: "A book",
    id: "2343",
    author: "authero anem",
    publishedData: new Date()
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
