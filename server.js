const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server running");
});

app.post("/buy-data", async (req, res) => {

    try {

        const { network, phone, plan } = req.body;

        console.log("Incoming Request:", req.body);

        const response = await fetch(
            "https://fadaqdata.com/api/data/",
            {
                method: "POST",
                headers: {
                    "Authorization": `Token ${process.env.API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    network: network,
                    mobile_number: phone,
                    plan: plan,
                    Ported_number: true
                })
            }
        );

        const data = await response.json();

        console.log("API Response:", data);

        if (
            data.Status === "successful" ||
            data.status === "success"
        ) {

            return res.json({
                success: true,
                message: "Data purchase successful",
                api: data
            });

        } else {

            return res.json({
                success: false,
                message:
                    data.message ||
                    data.Status ||
                    "Transaction failed",
                api: data
            });

        }

    } catch (error) {

        console.log("SERVER ERROR:", error);

        return res.json({
            success: false,
            message: "Server Error"
        });

    }

});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
