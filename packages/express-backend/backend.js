import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());

const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

const findUserById = (id) =>
  users["users_list"].find((user) => user["id"] === id);

const findUserByJob = (job) => {
  return users["users_list"].filter(
    (user) => user["job"] === job
  );
};
const addUser = (user) => {
    users["users_list"].push(user);
    return user;
};

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspiring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    },
    {
      id: "qwe123",
      name: "Cindy",
      job: "Zookeeper"
    }
  ]
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

app.get("/users/:name/:job", (req, res) => {
  const name = req.params['name'];
  const job = req.params['job'];
 
  if (name != undefined && job != undefined) {
    let result = findUserByName(name);
    result = { users_list: findUserByJob(job) };
    res.send(result);
  } else {
    res.status(404).send("Resource not found.");
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

app.get("/users/:job", (req, res) => {
  const job = req.params["job"]; //or req.params.id
  console.log(job)
  let result = findUserByJob(job);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd);
  res.send();
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const initialLength = users.users_list.length;
    users.users_list = users.users_list.filter(user => user.id !== id);
    const currentLength = users.users_list.length;
    if (initialLength > currentLength) {
        res.status(200).send(`User with id ${id} has been deleted.`);
    } else {
        res.status(404).send("User not found.");
    }
});

