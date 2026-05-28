const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {

  res.sendFile(__dirname + "/index.html");

});

app.post("/buy-data", async (req, res) => {

  console.log("BUY DATA HIT");

  return res.json({

    success: true,

    message: "Backend working"

  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log("Server running on port " + PORT);

});
