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

    const network = req.body.network;
    const phone = req.body.phone;
    const data_plan = req.body.data_plan;

    if (!network || !phone || !data_plan) {

      return res.json({
        success: false,
        message: "Missing fields"
      });

    }

    const payload = {

      network: String(network),

      phone: String(phone),

      data_plan: String(data_plan),

      ref: "DATA" + Date.now(),

      ported_number: "true"

    };

    console.log(payload);

    const apiResponse = await fetch(
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

    const raw = await apiResponse.text();

    console.log("RAW RESPONSE:");
    console.log(raw);

    let data;

    try {

      data = JSON.parse(raw);

    } catch (e) {

      return res.json({
        success: false,
        message: raw
      });

    }

    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {

      return res.json({
        success: true,
        message: "Transaction successful",
        data: data
      });

    } else {

      return res.json({
        success: false,
        message:
          data.message ||
          data.error ||
          JSON.stringify(data)
      });

    }

  } catch (err) {

    console.log(err);

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
