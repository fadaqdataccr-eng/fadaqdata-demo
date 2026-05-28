const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ======================
// API KEY
// ======================

const API_KEY = "952x342vA24B7c6CG8CC93BdaACyiICEcBF5CtCqDHlgz3oCwAA16J1xBeh01779957867";

// ======================
// TEMP STORAGE
// ======================

let history = [];

// ======================
// HOME PAGE
// ======================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ======================
// LOGIN PAGE
// ======================

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// ======================
// BUY DATA PAGE
// ======================

app.get("/buy-data-page", (req, res) => {
  res.sendFile(path.join(__dirname, "buy-data.html"));
});

// ======================
// BUY AIRTIME PAGE
// ======================

app.get("/buy-airtime-page", (req, res) => {
  res.sendFile(path.join(__dirname, "buy-airtime.html"));
});

// ======================
// HISTORY PAGE
// ======================

app.get("/history-page", (req, res) => {
  res.sendFile(path.join(__dirname, "history.html"));
});

// ======================
// BUY DATA API
// ======================

app.post("/buy-data", async (req, res) => {

  try {

    const { network, phone, data_plan } = req.body;

    if (!network || !phone || !data_plan) {
      return res.json({
        success: false,
        message: "All fields required"
      });
    }

    const ref = "DATA" + Date.now();

    console.log("Sending Request To API...");

    const apiResponse = await fetch("https://fadaqdata.com/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${API_KEY}`
      },
      body: JSON.stringify({
        network: String(network),
        phone: String(phone),
        data_plan: String(data_plan),
        ref: ref,
        ported_number: true
      })
    });

    const rawText = await apiResponse.text();

    console.log("RAW API RESPONSE:");
    console.log(rawText);

    let data;

    try {

      data = JSON.parse(rawText);

    } catch (jsonError) {

      return res.json({
        success: false,
        message: "API did not return JSON",
        raw: rawText
      });

    }

    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {

      const receipt = {
        type: "Data Purchase",
        phone,
        network,
        plan: data_plan,
        reference: ref,
        date: new Date().toLocaleString()
      };

      history.push(receipt);

      return res.json({
        success: true,
        message: "Data purchase successful",
        receipt
      });

    } else {

      return res.json({
        success: false,
        message:
          data.message ||
          data.true_response ||
          "Transaction failed"
      });

    }

  } catch (error) {

    console.log("SERVER ERROR:");
    console.log(error);

    return res.json({
      success: false,
      message: "Network Error"
    });

  }

});

// ======================
// HISTORY API
// ======================

app.get("/history", (req, res) => {
  res.json(history);
});

// ======================
// RECEIPT API
// ======================

app.get("/receipt/:reference", (req, res) => {

  const receipt = history.find(
    item => item.reference === req.params.reference
  );

  if (!receipt) {
    return res.json({
      success: false,
      message: "Receipt not found"
    });
  }

  res.json({
    success: true,
    receipt
  });

});

// ======================
// START SERVER
// ======================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
