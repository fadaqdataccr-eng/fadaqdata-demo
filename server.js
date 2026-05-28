const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// =========================
// TEST ROUTE
// =========================
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "FadaqData Server Running Successfully"
  });
});

// =========================
// BUY DATA ROUTE
// =========================
app.post("/buy-data", async (req, res) => {
  try {
    const { network, phone, data_plan } = req.body;

    // =========================
    // VALIDATION
    // =========================
    if (!network || !phone || !data_plan) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required"
      });
    }

    // =========================
    // GENERATE REFERENCE
    // =========================
    const ref = "DATA" + Date.now();

    // =========================
    // FADAQDATA API REQUEST
    // =========================
    const response = await fetch("https://fadaqdata.com/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Token geCAbvc3prhCyC5dtB05wi11q4C9n4zsCHC79DoxFG366xAA3C3aAJ2bBBAf1757076980"
      },
      body: JSON.stringify({
        network: network,
        phone: phone,
        ref: ref,
        data_plan: data_plan,
        ported_number: true
      })
    });

    const data = await response.json();

    console.log("FadaqData Response:", data);

    // =========================
    // SUCCESS RESPONSE
    // =========================
    if (
      data.status === "success" ||
      data.Status === "successful"
    ) {
      return res.json({
        status: "success",
        message: data.true_response || "Data purchase successful",
        api_response: data
      });
    }

    // =========================
    // FAILED RESPONSE
    // =========================
    return res.status(400).json({
      status: "error",
      message: data.message || "Transaction failed",
      api_response: data
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      message: "Server Error",
      error: error.message
    });
  }
});

// =========================
// START SERVER
// =========================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
