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
    addedDate: new Date(),
    price: 433,
  });
});

const coursesData = [
  {
    id: "34js",
    name: "JS Course",
    description: "A Complete JavaScript course",
    price: 456,
    effortHour: 100,
  },
  {
    id: "56py",
    name: "Python Course",
    description: "A Complete Python course",
    price: 200,
    effortHour: 60,
  },
  {
    id: "90C",
    name: "C Course",
    description: "A Complete C course",
    price: 1000,
    effortHour: 2000,
  },
];

app.get("/api/v1/courses", (req, res) => {
  return res.status(200).json(coursesData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
