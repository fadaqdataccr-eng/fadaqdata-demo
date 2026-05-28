const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// HOME
app.get("/", (req, res) => {

  res.json({
    status: "success",
    message: "FadaqData Server Running"
  });

});

// BUY DATA
app.post("/buy-data", async (req, res) => {

  try {

    const { network, phone, data_plan } = req.body;

    if (!network || !phone || !data_plan) {

      return res.status(400).json({
        status: "error",
        message: "All fields required"
      });

    }

    const ref = "DATA" + Date.now();

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

    // GET RAW RESPONSE
    const rawText = await response.text();

    console.log("Raw API Response:", rawText);

    // CHECK HTML ERROR
    if(rawText.includes("<html")){

      return res.status(503).json({
        status: "error",
        message:
        "FadaqData server temporarily unavailable. Please try again later."
      });

    }

    // PARSE JSON
    const result = JSON.parse(rawText);

    console.log("Parsed Response:", result);

    // SUCCESS
    if(
      result.status === "success" ||
      result.Status === "successful"
    ){

      return res.json({
        status: "success",
        message:
        result.true_response ||
        "Data Purchase Successful",

        api_response: result
      });

    }

    // FAILED
    return res.status(400).json({
      status: "error",
      message:
      result.message ||
      "Transaction failed"
    });

  } catch(error){

    console.log("SERVER ERROR:", error);

    return res.status(500).json({
      status: "error",
      message:
      "Internal server error"
    });

  }

});

// START SERVER
app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
