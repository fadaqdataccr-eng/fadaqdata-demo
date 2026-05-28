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
        message: "All fields required"
      });

    }

    const payload = {

      network: String(network),

      phone: String(phone),

      data_plan: String(data_plan),

      ref: "DATA" + Date.now(),

      ported_number: true

    };

    console.log("PAYLOAD:", payload);

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

    const raw = await response.text();

    console.log("RAW RESPONSE:", raw);

    let data;

    try {

      data = JSON.parse(raw);

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

          network,

          phone,

          data_plan,

          response: data.true_response || ""

        }

      });

    } else {

      return res.json({

        success: false,

        message:
          data.message ||
          data.error ||
          "Transaction failed"

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
