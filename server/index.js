const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static("public"));
app.set("views engine", "ejs");
app.set("views", "./views");

io.on("connection", (socket) => {
  console.log("[user][connected]: ", socket.id);

  socket.on("disconnect", () => {
    console.log("[user][disconnected]: ", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

server.listen(3000);
console.log("Server is listening on port 3000.");
