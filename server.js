const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/buy-data", async (req, res) => {

try {

const response = await fetch(
"https://fadaqdata.com/api/data/",
{
method: "POST",

headers: {
"Content-Type": "application/json",
"Authorization":
"Token geCAbvc3prhCyC5dtB05wi11q4C9n4zsCHC79DoxFG366xAA3C3aAJ2bBBAf1757076980"
},

body: JSON.stringify(req.body)
}
);

const data = await response.json();

res.json(data);

} catch (err) {

res.status(500).json({
status: "error",
message: err.message
});

}

});

app.listen(3000, () => {
console.log("Server running");
});
