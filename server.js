const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ==============================
// HOME ROUTE
// ==============================
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "FadaqData Server Running"
  });
});

// ==============================
// BUY DATA ROUTE
// ==============================
app.post("/buy-data", async (req, res) => {

  try {

    const { network, phone, data_plan } = req.body;

    // VALIDATION
    if (!network || !phone || !data_plan) {

      return res.status(400).json({
        status: "error",
        message: "All fields are required"
      });

    }

    // GENERATE REFERENCE
    const ref = "DATA" + Date.now();

    console.log("Incoming Request:", {
      network,
      phone,
      data_plan
    });

    // ==============================
    // SEND REQUEST TO FADAQDATA API
    // ==============================
    const response = await fetch(
      "https://fadaqdata.com/api/data/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          "Authorization":
          "Token 952x342vA24B7c6CG8CC93BdaACyiICEcBF5CtCqDHlgz3oCwAA16J1xBeh01779957867"
        },

        body: JSON.stringify({
          network: String(network),
          phone: String(phone),
          ref: ref,
          data_plan: String(data_plan),
          ported_number: true
        })

      }
    );

    // GET RESPONSE
    const result = await response.json();

    console.log("FadaqData API Response:", result);

    // ==============================
    // SUCCESS RESPONSE
    // ==============================
    if (
      result.status === "success" ||
      result.Status === "successful"
    ) {

      return res.json({
        status: "success",
        message:
          result.true_response ||
          "Data Purchase Successful",

        api_response: result
      });

    }

    // ==============================
    // FAILED RESPONSE
    // ==============================
    return res.status(400).json({
      status: "error",
      message:
        result.message ||
        "Transaction failed",

      api_response: result
    });

  } catch (error) {

    console.log("SERVER ERROR:", error);

    return res.status(500).json({
      status: "error",
      message: error.message
    });

  }

});

// ==============================
// START SERVER
// ==============================
app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
