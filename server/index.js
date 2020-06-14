const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static("public"));
app.set("views engine", "ejs");
app.set("views", "./views");

io.on("connection", (socket) => {
  console.log("Has new user conection: ", socket.id);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

server.listen(3000);
console.log("Server is listening on port 3000.");
