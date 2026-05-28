const express = require("express");
const cors = require("cors");

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

      return res.status(400).json({
        success: false,
        message: "Missing fields"
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

    const data = await response.json();

    console.log("API RESPONSE:", data);

    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {

      return res.json({

        success: true,

        message: "Transaction successful",

        data

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

  } catch (error) {

    console.log("SERVER ERROR:");
    console.log(error);

    return res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log("Server running on port " + PORT);

});
