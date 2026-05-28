const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = "952x342vA24B7c6CG8CC93BdaACyiICEcBF5CtCqDHlgz3oCwAA16J1xBeh01779957867";

let history = [];

// =====================
// BUY DATA
// =====================
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

    const response = await fetch("https://fadaqdata.com/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${API_KEY}`
      },
      body: JSON.stringify({
        network: network,
        phone: phone,
        data_plan: data_plan,
        ref: ref,
        ported_number: true
      })
    });

    const data = await response.json();

    console.log(data);

    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {

      const receipt = {
        type: "Data",
        phone,
        network,
        plan: data_plan,
        ref,
        amount: "Success",
        date: new Date().toLocaleString()
      };

      history.push(receipt);

      return res.json({
        success: true,
        message: "Data purchase successful",
        receipt
      });
    }

    return res.json({
      success: false,
      message: data.message || data.true_response || "Transaction failed"
    });

  } catch (err) {
    console.log(err);

    res.json({
      success: false,
      message: "Network Error"
    });
  }
});

// =====================
// HISTORY
// =====================
app.get("/history", (req, res) => {
  res.json(history);
});

// =====================
// RECEIPT
// =====================
app.get("/receipt/:ref", (req, res) => {

  const receipt = history.find(
    item => item.ref === req.params.ref
  );

  if (!receipt) {
    return res.send("Receipt not found");
  }

  res.json(receipt);
});

// =====================
// ROUTES
// =====================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/buy-data-page", (req, res) => {
  res.sendFile(path.join(__dirname, "buy-data.html"));
});

app.get("/buy-airtime-page", (req, res) => {
  res.sendFile(path.join(__dirname, "buy-airtime.html"));
});

// =====================
// SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
