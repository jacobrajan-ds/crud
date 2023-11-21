const express = require("express");
const app = express();

app.use(express.json());

const user = [
  {
    id: 1,
    name: "Jacob",
    place: "tirunelveli",
  },
  {
    id: 2,
    name: "Rajan",
    place: "chennai",
  },
  {
    id: 3,
    name: "Jerome",
    place: "bangalore",
  },
];

app.get("/", (req, res) => {
  res.json({ "Hello World": "Hello" });
});

app.get("/users", (req, res) => {
  res.json(user);
});

app.post("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is Running");
});
