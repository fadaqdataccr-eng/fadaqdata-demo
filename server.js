const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;



/* LOGIN PAGE */

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FadaqData</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f3f3f3;
padding-bottom:90px;
}

.top{
background:linear-gradient(to right,#6b0000,#c40000);
padding:25px 20px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
}

.menu{
font-size:42px;
}

.logo{
font-size:42px;
font-weight:bold;
}

.right{
display:flex;
align-items:center;
gap:14px;
}

.bell{
font-size:38px;
position:relative;
}

.badge{
position:absolute;
top:-8px;
right:-8px;
background:red;
color:white;
width:24px;
height:24px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:13px;
font-weight:bold;
}

.profile{
width:60px;
height:60px;
border-radius:50%;
background:white;
color:#8b0000;
display:flex;
align-items:center;
justify-content:center;
font-size:35px;
font-weight:bold;
}

.alert{
background:#fff4ec;
margin:18px;
padding:16px;
border-radius:18px;
display:flex;
justify-content:space-between;
font-weight:bold;
margin-top:-55px;
}

.wallet{
background:white;
margin:15px;
padding:20px;
border-radius:22px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.wallet-top{
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
}

.balance{
font-size:16px;
margin-bottom:10px;
}

.amount{
font-size:42px;
font-weight:bold;
color:#8b0000;
line-height:1.1;
}

.wallet-img{
width:95px;
height:95px;
border-radius:50%;
background:#f8f8f8;
display:flex;
align-items:center;
justify-content:center;
font-size:55px;
}

.btn-row{
display:flex;
gap:12px;
margin-top:18px;
}

.btn1{
flex:1;
padding:14px;
border:none;
border-radius:16px;
background:#970000;
color:white;
font-size:18px;
font-weight:bold;
}

.btn2{
flex:1;
padding:14px;
border-radius:16px;
border:2px solid #970000;
background:white;
color:#970000;
font-size:18px;
font-weight:bold;
}

.section-title{
display:flex;
justify-content:space-between;
align-items:center;
padding:0 15px;
margin-top:10px;
}

.section-title h2{
font-size:22px;
}

.section-title span{
color:#8b0000;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
padding:12px;
}

.service{
background:white;
border-radius:18px;
padding:22px 15px;
text-align:center;
box-shadow:0 4px 10px rgba(0,0,0,0.05);
}

.icon{
font-size:34px;
margin-bottom:10px;
}

.name{
font-size:20px;
font-weight:bold;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
background:#970000;
display:flex;
justify-content:space-around;
padding:12px 0;
border-top-left-radius:22px;
border-top-right-radius:22px;
}

.nav{
text-align:center;
color:white;
font-size:14px;
}

.nav-icon{
font-size:24px;
margin-bottom:4px;
}

a{
text-decoration:none;
color:inherit;
}

</style>
</head>

<body>

<div class="top">

<div class="topbar">

<div class="menu">☰</div>

<div class="logo">FadaqData</div>

<div class="right">

<div class="bell">
🔔
<div class="badge">3</div>
</div>

<div class="profile">F</div>

</div>

</div>

</div>


<div class="alert">
<div>📢 MTN Share & Sell temporarily unavailable</div>
<div>View all</div>
</div>


<div class="wallet">

<div class="wallet-top">

<div>

<div class="balance">
Wallet Balance 👁️
</div>

<div class="amount">
₦25,450.00
</div>

</div>

<div class="wallet-img">
💰
</div>

</div>

<div class="btn-row">

<a href="/fund-wallet" style="flex:1;">
<button class="btn1">Fund Wallet</button>
</a>

<button class="btn2">Transfer</button>

</div>

</div>



<div class="section-title">
<h2>Quick Services</h2>
<span>View all</span>
</div>


<div class="grid">

<div class="service">
<div class="icon">📱</div>
<div class="name">Airtime</div>
</div>

<div class="service">
<div class="icon">📶</div>
<div class="name">Data</div>
</div>

<div class="service">
<div class="icon">💸</div>
<div class="name">Airtime2Cash</div>
</div>

<div class="service">
<div class="icon">📺</div>
<div class="name">Cable TV</div>
</div>

<div class="service">
<div class="icon">⚡</div>
<div class="name">Electricity</div>
</div>

<div class="service">
<div class="icon">🎓</div>
<div class="name">Exam PIN</div>
</div>

</div>



<div class="bottom-nav">

<div class="nav">
<div class="nav-icon">🏠</div>
Home
</div>

<div class="nav">
<div class="nav-icon">💼</div>
Wallet
</div>

<div class="nav">
<div class="nav-icon">📋</div>
Services
</div>

<div class="nav">
<div class="nav-icon">🧾</div>
Transactions
</div>

<div class="nav">
<div class="nav-icon">👤</div>
Profile
</div>

</div>


</body>
</html>

`);

});




/* FUND WALLET PAGE */

app.get("/fund-wallet", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f4f4f4;
}

.top{
background:linear-gradient(to right,#5a0000,#b00000);
padding:25px 20px 80px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.head{
display:flex;
justify-content:space-between;
align-items:center;
}

.title{
font-size:38px;
font-weight:bold;
}

.icon{
font-size:40px;
}

.card{
background:white;
margin:-45px 15px 20px;
padding:20px;
border-radius:25px;
}

.tabs{
display:flex;
justify-content:space-between;
font-size:18px;
font-weight:bold;
margin-bottom:25px;
}

.active{
color:#7a0000;
border-bottom:4px solid #7a0000;
padding-bottom:10px;
}

.bank{
background:#f7f2e9;
padding:25px;
border-radius:20px;
margin-bottom:20px;
}

.label{
font-size:16px;
color:gray;
margin-top:18px;
}

.value{
font-size:28px;
font-weight:bold;
margin-top:10px;
}

input{
width:100%;
padding:18px;
border-radius:18px;
border:2px solid #eee;
font-size:18px;
margin-top:18px;
}

.btn{
width:100%;
padding:18px;
border:none;
background:#970000;
color:white;
font-size:22px;
font-weight:bold;
border-radius:18px;
margin-top:20px;
}

.secure{
text-align:center;
margin-top:22px;
font-size:18px;
color:gray;
}

a{
text-decoration:none;
color:white;
}

</style>
</head>

<body>

<div class="top">

<div class="head">

<a href="/">←</a>

<div class="title">Fund Wallet</div>

<div class="icon">❔</div>

</div>

</div>


<div class="card">

<div class="tabs">

<div class="active">Automated Funding</div>

<div>Manual Funding</div>

</div>


<div class="bank">

<div class="label">Bank Name</div>
<div class="value">Providus Bank</div>

<div class="label">Account Name</div>
<div class="value">FadaqData - John O.</div>

<div class="label">Account Number</div>
<div class="value">1234567890</div>

</div>


<input type="text" placeholder="Enter amount">

<input type="text" placeholder="Reference ID / Description (Optional)">

<button class="btn">
Proceed to Pay
</button>

<div class="secure">
🔒 Your payment is secure and protected
</div>

</div>

</body>
</html>

`);

});



app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
