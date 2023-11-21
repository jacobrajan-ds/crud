const express = require("express");
const app = express();

app.use(express.json());

const users = [
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

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const getUser = users.filter((user) => {
    return user.id === parseInt(id);
  });

  if (getUser.length === 0) {
    return res.json({ error: "No user found" });
  }
  res.send(getUser);
});

app.post("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is Running");
});
