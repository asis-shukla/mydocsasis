const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());
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
    id: "1",
    name: "JS Course",
    description: "A Complete JavaScript course",
    price: 456,
    effortHour: 100,
  },
  {
    id: "2",
    name: "Python Course",
    description: "A Complete Python course",
    price: 200,
    effortHour: 60,
  },
  {
    id: "3",
    name: "C Course",
    description: "A Complete C course",
    price: 1000,
    effortHour: 2000,
  },
];

app.get("/api/v1/courses", (req, res) => {
  return res.status(200).json(coursesData);
});

app.get("/api/v1/courses/:id", (req, res) => {
  const course = coursesData.find(
    (courseItem) => courseItem.id === req.params.id
  );
  return res.status(200).json(course ? course : null);
});

app.post("/api/v1/addcourse", (req, res) => {
  console.log("req.body", req.body);
  coursesData.push(req.body);
  res.send(true);
});

app.get("/api/v1/coursequery", (req, res) => {
  const location = req.query.location;
  const device = req.query.device;
  res.json({ location, device });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
