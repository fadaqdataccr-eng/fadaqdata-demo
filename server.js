const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/buy-data", async (req, res) => {

  try {

    const { network, phone, data_plan } = req.body;

    if (!network || !phone || !data_plan) {

      return res.json({
        success: false,
        message: "Missing fields"
      });

    }

    const payload = {
      network: network,
      phone: phone,
      data_plan: data_plan,
      bypass: false
    };

    console.log("Sending Payload:", payload);

    const response = await fetch(
      "https://fadaqdata.com/api/data/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${API_KEY}`
        },

        body: JSON.stringify(payload)
      }
    );

    const text = await response.text();

    console.log("RAW API RESPONSE:", text);

    let data;

    try {

      data = JSON.parse(text);

    } catch {

      return res.json({
        success: false,
        message: "Invalid API response"
      });

    }

    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {

      return res.json({
        success: true,
        message: "Transaction successful",

        receipt: {
          phone: phone,
          network: network,
          plan: data_plan,
          response: data.true_response
        }
      });

    } else {

      return res.json({
        success: false,
        message: data.message || "Transaction failed"
      });

    }

  } catch (error) {

    console.log(error);

    return res.json({
      success: false,
      message: "Server Error"
    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
