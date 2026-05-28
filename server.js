const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;



/* =========================
   LOGIN PAGE
========================= */

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>FadaqData Login</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f5f5;
}

.top{
background:linear-gradient(to right,#4b0000,#d00000);
padding:35px 25px 100px;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
color:white;
}

.logo{
font-size:70px;
font-weight:bold;
}

.slogan{
font-size:18px;
margin-top:15px;
line-height:1.6;
}

.card{
background:white;
width:92%;
margin:-70px auto 20px;
padding:30px 25px;
border-radius:35px;
box-shadow:0 4px 10px rgba(0,0,0,0.08);
}

.welcome{
font-size:42px;
font-weight:bold;
text-align:center;
}

.wave{
font-size:50px;
text-align:center;
margin-top:10px;
}

.subtitle{
text-align:center;
color:gray;
font-size:18px;
margin:15px 0 30px;
}

.input{
width:100%;
padding:20px;
border:none;
outline:none;
background:#f2ecc4;
border-radius:18px;
margin-bottom:20px;
font-size:18px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
font-size:16px;
}

.forgot{
color:#7a0000;
font-weight:bold;
text-decoration:none;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:22px;
font-weight:bold;
margin-bottom:20px;
}

.or{
text-align:center;
font-size:32px;
font-weight:bold;
color:gray;
margin-bottom:20px;
}

.google{
width:100%;
padding:20px;
border-radius:20px;
border:2px solid #eee;
background:white;
font-size:20px;
font-weight:bold;
margin-bottom:25px;
}

.bottom{
text-align:center;
font-size:18px;
}

.bottom a{
color:#7a0000;
font-weight:bold;
text-decoration:none;
}

</style>

</head>

<body>

<div class="top">

<div class="logo">
FadaqData
</div>

<div class="slogan">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>



<div class="card">

<div class="welcome">
Welcome Back!
</div>

<div class="wave">
👋
</div>

<div class="subtitle">
Login to continue to your account
</div>



<input class="input" type="text" placeholder="Email, Username or Phone Number">

<input class="input" type="password" placeholder="Password">



<div class="row">

<div>
<input type="checkbox">
Remember Me
</div>

<a class="forgot" href="/forgot-password">
Forgot Password?
</a>

</div>



<button class="btn" onclick="window.location.href='/dashboard'">
Login
</button>



<div class="or">
OR
</div>



<button class="google" onclick="window.location.href='/register'">
Continue with Google
</button>



<div class="bottom">
Don't have an account?
<a href="/register">Register</a>
</div>

</div>

</body>

</html>

`);

});



/* =========================
   REGISTER PAGE
========================= */

app.get("/register", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Register</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f5f5;
}

.top{
background:linear-gradient(to right,#4b0000,#d00000);
padding:35px 25px 100px;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
color:white;
}

.logo{
font-size:60px;
font-weight:bold;
}

.card{
background:white;
width:92%;
margin:-70px auto 20px;
padding:30px 25px;
border-radius:35px;
box-shadow:0 4px 10px rgba(0,0,0,0.08);
}

.title{
font-size:40px;
font-weight:bold;
text-align:center;
margin-bottom:25px;
}

.input{
width:100%;
padding:18px;
border:none;
outline:none;
background:#f2ecc4;
border-radius:18px;
margin-bottom:18px;
font-size:18px;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:22px;
font-weight:bold;
margin-top:10px;
}

.bottom{
margin-top:25px;
text-align:center;
font-size:18px;
}

.bottom a{
color:#7a0000;
font-weight:bold;
text-decoration:none;
}

</style>

</head>

<body>

<div class="top">

<div class="logo">
FadaqData
</div>

</div>



<div class="card">

<div class="title">
Create Account
</div>

<input class="input" type="text" placeholder="Full Name">

<input class="input" type="email" placeholder="Email Address">

<input class="input" type="text" placeholder="Phone Number">

<input class="input" type="password" placeholder="Password">

<input class="input" type="password" placeholder="Confirm Password">

<input class="input" type="text" placeholder="Referral Code (Optional)">



<button class="btn" onclick="window.location.href='/dashboard'">
Create Account
</button>



<div class="bottom">
Already have an account?
<a href="/">Login</a>
</div>

</div>

</body>

</html>

`);

});



/* =========================
   FORGOT PASSWORD PAGE
========================= */

app.get("/forgot-password", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Forgot Password</title>

<style>

body{
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:30px;
}

.card{
background:white;
padding:25px;
border-radius:20px;
max-width:500px;
margin:auto;
margin-top:100px;
}

h1{
margin-bottom:20px;
}

input{
width:100%;
padding:18px;
border-radius:15px;
border:1px solid #ddd;
margin-bottom:20px;
font-size:18px;
}

button{
width:100%;
padding:18px;
border:none;
border-radius:15px;
background:#a00000;
color:white;
font-size:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="card">

<h1>Forgot Password</h1>

<input type="email" placeholder="Enter your email">

<button>
Reset Password
</button>

</div>

</body>

</html>

`);

});



/* =========================
   DASHBOARD PAGE
========================= */

app.get("/dashboard", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Dashboard</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f5f5;
padding-bottom:120px;
}

.top{
background:linear-gradient(to right,#4b0000,#d00000);
padding:22px 20px 70px;
color:white;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.menu{
font-size:40px;
}

.logo{
font-size:42px;
font-weight:bold;
}

.right{
display:flex;
align-items:center;
gap:20px;
}

.bell{
font-size:38px;
position:relative;
}

.badge{
position:absolute;
top:-8px;
right:-10px;
background:red;
color:white;
width:22px;
height:22px;
border-radius:50%;
font-size:14px;
display:flex;
align-items:center;
justify-content:center;
}

.profile{
width:65px;
height:65px;
border-radius:50%;
background:white;
color:#7a0000;
display:flex;
align-items:center;
justify-content:center;
font-size:40px;
font-weight:bold;
}

.notice{
background:#fff6f0;
width:94%;
margin:-35px auto 20px;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
font-size:17px;
font-weight:bold;
}

.wallet{
background:white;
width:94%;
margin:auto;
padding:22px;
border-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.balance-title{
font-size:20px;
margin-bottom:15px;
}

.balance{
font-size:42px;
font-weight:bold;
color:#900;
}

.wallet-buttons{
display:flex;
gap:15px;
margin-top:20px;
}

.fund{
padding:16px 25px;
border:none;
border-radius:18px;
background:#a00000;
color:white;
font-size:16px;
font-weight:bold;
}

.transfer{
padding:16px 25px;
border-radius:18px;
border:2px solid #a00000;
background:white;
color:#a00000;
font-size:16px;
font-weight:bold;
}

.wallet-icon{
width:90px;
height:90px;
border-radius:50%;
background:#f5f5f5;
display:flex;
align-items:center;
justify-content:center;
font-size:55px;
}

.section{
width:94%;
margin:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
}

.section h2{
font-size:22px;
}

.view{
color:#7a0000;
font-weight:bold;
}

.services{
width:94%;
margin:auto;
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
}

.service{
background:white;
padding:30px 20px;
border-radius:20px;
text-align:center;
font-weight:bold;
font-size:18px;
}

.service-icon{
font-size:45px;
margin-bottom:15px;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
width:100%;
background:#a00000;
display:flex;
justify-content:space-around;
padding:15px 0;
}

.nav-item{
color:white;
text-align:center;
font-size:14px;
text-decoration:none;
}

.nav-icon{
font-size:28px;
margin-bottom:5px;
}

</style>

</head>

<body>

<div class="top">

<div class="header">

<div class="menu">
☰
</div>

<div class="logo">
FadaqData
</div>

<div class="right">

<div class="bell">
🔔
<div class="badge">3</div>
</div>

<div class="profile">
F
</div>

</div>

</div>

</div>



<div class="notice">

<div>
📢 MTN Share & Sell temporarily unavailable
</div>

<div>
View all
</div>

</div>



<div class="wallet">

<div>

<div class="balance-title">
Wallet Balance 👁️
</div>

<div class="balance">
₦25,450.00
</div>

<div class="wallet-buttons">

<button class="fund" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

<button class="transfer">
Transfer
</button>

</div>

</div>

<div class="wallet-icon">
💰
</div>

</div>



<div class="section">

<h2>Quick Services</h2>

<div class="view">
View all
</div>

</div>



<div class="services">

<div class="service" onclick="window.location.href='/airtime'">

<div class="service-icon">
📱
</div>

Airtime

</div>



<div class="service">

<div class="service-icon">
📶
</div>

Data

</div>



<div class="service">

<div class="service-icon">
💸
</div>

Airtime2Cash

</div>



<div class="service">

<div class="service-icon">
📺
</div>

Cable TV

</div>



<div class="service">

<div class="service-icon">
⚡
</div>

Electricity

</div>



<div class="service">

<div class="service-icon">
🎓
</div>

Exam PIN

</div>

</div>



<div class="bottom-nav">

<a href="/dashboard" class="nav-item">

<div class="nav-icon">🏠</div>
Home

</a>

<a href="/fund-wallet" class="nav-item">

<div class="nav-icon">💼</div>
Wallet

</a>

<a href="#" class="nav-item">

<div class="nav-icon">📋</div>
Services

</a>

<a href="#" class="nav-item">

<div class="nav-icon">🧾</div>
Transactions

</a>

<a href="#" class="nav-item">

<div class="nav-icon">👤</div>
Profile

</a>

</div>

</body>

</html>

`);

});



/* =========================
   FUND WALLET PAGE
========================= */

app.get("/fund-wallet", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Fund Wallet</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f5f5;
}

.top{
background:linear-gradient(to right,#4b0000,#d00000);
padding:20px 18px 70px;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
color:white;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.back{
font-size:32px;
text-decoration:none;
color:white;
}

.title{
font-size:34px;
font-weight:bold;
}

.help{
font-size:34px;
}

.card{
background:white;
width:92%;
margin:-45px auto 20px;
padding:22px;
border-radius:30px;
}

.tabs{
display:flex;
justify-content:space-between;
margin-bottom:20px;
font-weight:bold;
font-size:18px;
}

.active{
color:#7a0000;
border-bottom:4px solid #7a0000;
padding-bottom:10px;
}

.bank{
background:#f8f3ea;
padding:25px;
border-radius:25px;
margin-bottom:20px;
}

.label{
font-size:18px;
color:gray;
margin-bottom:10px;
}

.value{
font-size:28px;
font-weight:bold;
margin-bottom:25px;
}

.input{
width:100%;
padding:20px;
border-radius:18px;
border:2px solid #eee;
margin-bottom:20px;
font-size:18px;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#5a0000,#b00000);
color:white;
font-size:24px;
font-weight:bold;
margin-top:10px;
}

.secure{
text-align:center;
margin-top:25px;
color:gray;
font-size:18px;
}

</style>

</head>

<body>

<div class="top">

<div class="header">

<a href="/dashboard" class="back">
←
</a>

<div class="title">
Fund Wallet
</div>

<div class="help">
❔
</div>

</div>

</div>



<div class="card">

<div class="tabs">

<div class="active">
Automated Funding
</div>

<div>
Manual Funding
</div>

</div>



<div class="bank">

<div class="label">
Bank Name
</div>

<div class="value">
Providus Bank
</div>



<div class="label">
Account Name
</div>

<div class="value">
FadaqData - John O.
</div>



<div class="label">
Account Number
</div>

<div class="value">
1234567890
</div>

</div>



<input class="input" type="text" placeholder="Enter amount">

<input class="input" type="text" placeholder="Reference ID / Description (Optional)">



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



/* =========================
   AIRTIME PAGE
========================= */

app.get("/airtime", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Buy Airtime</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f5f5;
padding-bottom:30px;
}

.top{
background:linear-gradient(to right,#4b0000,#b00000);
padding:20px 18px 70px;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
color:white;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.back{
font-size:32px;
color:white;
text-decoration:none;
}

.title{
font-size:34px;
font-weight:bold;
}

.help{
font-size:34px;
}

.card{
background:white;
margin:-45px 15px 20px;
padding:20px;
border-radius:28px;
box-shadow:0 4px 10px rgba(0,0,0,0.05);
}

.tabs{
display:flex;
gap:10px;
margin-bottom:25px;
overflow:auto;
}

.tab{
min-width:120px;
padding:15px 12px;
border-radius:15px;
border:2px solid #eee;
text-align:center;
font-size:18px;
font-weight:bold;
background:white;
}

.active-tab{
background:linear-gradient(to right,#5a0000,#a00000);
color:white;
border:none;
}

.label{
font-size:18px;
font-weight:bold;
margin-bottom:15px;
}

.networks{
display:grid;
grid-template-columns:1fr 1fr;
gap:14px;
margin-bottom:25px;
}

.network{
background:white;
border:2px solid #f0f0f0;
border-radius:18px;
padding:18px;
text-align:center;
}

.network img{
width:65px;
height:65px;
object-fit:contain;
}

.input-box{
background:white;
border:2px solid #eee;
border-radius:18px;
padding:18px;
display:flex;
align-items:center;
gap:12px;
margin-bottom:25px;
}

.input-box input{
border:none;
outline:none;
width:100%;
font-size:18px;
}

.icon{
font-size:24px;
}

.amounts{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:10px;
margin-bottom:25px;
}

.amount{
padding:15px 5px;
border-radius:15px;
background:white;
border:2px solid #eee;
text-align:center;
font-size:18px;
font-weight:bold;
}

.active-amount{
background:linear-gradient(to right,#5a0000,#a00000);
color:white;
border:none;
}

.summary{
display:flex;
background:white;
border:2px solid #eee;
border-radius:20px;
overflow:hidden;
margin-bottom:25px;
}

.summary-box{
flex:1;
padding:18px;
}

.summary-title{
font-size:17px;
color:gray;
margin-bottom:10px;
}

.summary-value{
font-size:22px;
font-weight:bold;
}

.buy-btn{
width:100%;
padding:18px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#5a0000,#a00000);
color:white;
font-size:28px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="top">

<div class="header">

<a href="/dashboard" class="back">
←
</a>

<div class="title">
Buy Airtime
</div>

<div class="help">
❔
</div>

</div>

</div>



<div class="card">

<div class="tabs">

<div class="tab active-tab">
VTU
</div>

<div class="tab">
Share & Sell
</div>

<div class="tab">
MoMo
</div>

<div class="tab">
GistPlus
</div>

</div>



<div class="label">
Network
</div>

<div class="networks">

<div class="network">

<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg">

</div>

<div class="network">

<img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Airtel_logo.svg">

</div>

<div class="network">

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Glo_logo.png">

</div>

<div class="network">

<img src="https://upload.wikimedia.org/wikipedia/commons/3/32/9mobile_Logo.png">

</div>

</div>



<div class="label">
Phone Number
</div>

<div class="input-box">

<div class="icon">
📞
</div>

<input type="text" placeholder="Enter phone number">

</div>



<div class="label">
Amount
</div>

<div class="amounts">

<div class="amount">
₦100
</div>

<div class="amount active-amount">
₦200
</div>

<div class="amount">
₦500
</div>

<div class="amount">
₦1,000
</div>

<div class="amount">
Other
</div>

</div>



<div class="summary">

<div class="summary-box">

<div class="summary-title">
You Pay
</div>

<div class="summary-value">
₦200.00
</div>

</div>

<div class="summary-box">

<div class="summary-title">
You Receive
</div>

<div class="summary-value">
₦200
</div>

</div>

</div>



<button class="buy-btn">
Buy Airtime
</button>

</div>

</body>

</html>

`);

});



app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
