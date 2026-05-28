const express = require("express");
const path = require("path");

const app = express();

/* STATIC FILES */
app.use(express.static("public"));

/* HOME PAGE */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

/* DASHBOARD PAGE */
app.get("/dashboard", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>FadaqData Dashboard</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#f3f3f3;
padding-bottom:100px;
}

/* HEADER */

.header{
background:linear-gradient(to right,#5b0000,#d10000);
padding:25px 20px;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
box-shadow:0 5px 15px rgba(0,0,0,0.15);
}

.logo{
font-size:28px;
font-weight:900;
}

.right{
display:flex;
align-items:center;
gap:15px;
}

.notification{
position:relative;
font-size:28px;
}

.badge{
position:absolute;
top:-5px;
right:-5px;
background:red;
color:white;
font-size:12px;
width:18px;
height:18px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
}

.profile{
width:50px;
height:50px;
border-radius:50%;
background:white;
display:flex;
justify-content:center;
align-items:center;
color:#7a0000;
font-weight:bold;
font-size:25px;
}

/* CONTAINER */

.container{
padding:20px;
}

/* ALERT */

.alert{
background:#f7efe7;
padding:16px;
border-radius:15px;
display:flex;
justify-content:space-between;
align-items:center;
font-weight:bold;
margin-bottom:20px;
}

/* WALLET */

.wallet{
background:white;
padding:25px;
border-radius:25px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
margin-bottom:25px;
}

.wallet-top{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
}

.wallet-balance{
font-size:55px;
font-weight:bold;
color:#7a0000;
margin-top:10px;
}

.wallet-buttons{
display:flex;
gap:15px;
margin-top:25px;
}

.btn{
flex:1;
padding:16px;
border-radius:15px;
font-size:18px;
font-weight:bold;
cursor:pointer;
}

.primary{
background:linear-gradient(to right,#5b0000,#c40000);
color:white;
border:none;
}

.outline{
background:white;
border:2px solid #8b0000;
color:#8b0000;
}

/* SECTION */

.section{
margin-bottom:30px;
}

.section-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
}

.section-title{
font-size:22px;
font-weight:bold;
}

.view-all{
color:#8b0000;
font-weight:bold;
}

/* SERVICES */

.services{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:15px;
}

.service{
background:white;
padding:25px 10px;
border-radius:20px;
text-align:center;
box-shadow:0 5px 10px rgba(0,0,0,0.05);
font-weight:bold;
}

.service-icon{
font-size:38px;
margin-bottom:10px;
}

/* TRANSACTION */

.transaction{
background:white;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 5px 10px rgba(0,0,0,0.05);
}

.transaction-left{
display:flex;
align-items:center;
gap:15px;
}

.network{
width:55px;
height:55px;
background:#ffcc00;
border-radius:15px;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
}

.amount{
color:green;
font-weight:bold;
font-size:28px;
}

/* BOTTOM NAV */

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
background:linear-gradient(to right,#5b0000,#c40000);
display:flex;
justify-content:space-around;
padding:14px 0;
border-top-left-radius:25px;
border-top-right-radius:25px;
color:white;
}

.nav-item{
text-align:center;
font-size:14px;
}

.nav-icon{
font-size:28px;
margin-bottom:5px;
}

</style>

</head>

<body>

<div class="header">

<div class="logo">
FadaqData
</div>

<div class="right">

<div class="notification">
🔔
<div class="badge">3</div>
</div>

<div class="profile">
F
</div>

</div>

</div>

<div class="container">

<div class="alert">
<div>📢 MTN Share & Sell temporarily unavailable</div>
<div>View all</div>
</div>

<div class="wallet">

<div class="wallet-top">

<div>
<h2>Wallet Balance 👁️</h2>

<div class="wallet-balance">
₦0
</div>
</div>

<div style="font-size:70px;">
👛
</div>

</div>

<div class="wallet-buttons">

<button class="btn primary">
Fund Wallet
</button>

<button class="btn outline">
Transfer
</button>

</div>

</div>

<div class="section">

<div class="section-header">
<div class="section-title">
Quick Services
</div>

<div class="view-all">
View all
</div>
</div>

<div class="services">

<div class="service">
<div class="service-icon">📱</div>
Airtime
</div>

<div class="service">
<div class="service-icon">📶</div>
Data
</div>

<div class="service">
<div class="service-icon">💸</div>
Airtime2Cash
</div>

<div class="service">
<div class="service-icon">📺</div>
Cable TV
</div>

<div class="service">
<div class="service-icon">⚡</div>
Electricity
</div>

<div class="service">
<div class="service-icon">🎓</div>
Exam PIN
</div>

</div>

</div>

<div class="section">

<div class="section-header">

<div class="section-title">
Recent Transactions
</div>

<div class="view-all">
View all
</div>

</div>

<div class="transaction">

<div class="transaction-left">

<div class="network">
MTN
</div>

<div>
<h3>MTN 500MB SME</h3>
<p>May 28, 2026 • 5:00 PM</p>
</div>

</div>

<div class="amount">
- ₦100
</div>

</div>

</div>

</div>

<div class="bottom-nav">

<div class="nav-item">
<div class="nav-icon">🏠</div>
Home
</div>

<div class="nav-item">
<div class="nav-icon">💼</div>
Wallet
</div>

<div class="nav-item">
<div class="nav-icon">📋</div>
Services
</div>

<div class="nav-item">
<div class="nav-icon">🧾</div>
Transactions
</div>

<div class="nav-item">
<div class="nav-icon">👤</div>
Profile
</div>

</div>

</body>
</html>

`);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
