const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;



/* =========================
   HOME REDIRECT
========================= */

app.get("/", (req, res) => {
  res.redirect("/login");
});



/* =========================
   LOGIN PAGE
========================= */

app.get("/login", (req, res) => {

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
background:#f4f4f4;
min-height:100vh;
}

.top{
background:linear-gradient(to right,#5a0000,#d10000);
padding:40px 25px 120px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:55px;
font-weight:bold;
margin-bottom:15px;
}

.text{
font-size:20px;
line-height:1.5;
}

.card{
background:white;
margin:-70px 20px 20px;
border-radius:30px;
padding:30px 22px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.title{
text-align:center;
font-size:42px;
font-weight:bold;
margin-bottom:10px;
}

.wave{
text-align:center;
font-size:40px;
margin-bottom:10px;
}

.subtitle{
text-align:center;
color:gray;
font-size:18px;
margin-bottom:25px;
}

.input{
width:100%;
padding:18px;
border:none;
background:#f7f0c9;
border-radius:18px;
margin-bottom:18px;
font-size:18px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
font-size:17px;
}

.forgot{
color:#8b0000;
font-weight:bold;
}

.login-btn{
width:100%;
padding:18px;
border:none;
background:linear-gradient(to right,#7a0000,#d10000);
color:white;
font-size:26px;
font-weight:bold;
border-radius:18px;
cursor:pointer;
}

.or{
text-align:center;
font-size:30px;
font-weight:bold;
color:gray;
margin:25px 0;
}

.google-btn{
width:100%;
padding:18px;
border-radius:18px;
border:2px solid #eee;
background:white;
font-size:20px;
font-weight:bold;
display:flex;
align-items:center;
justify-content:center;
gap:10px;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:30px;
font-size:20px;
}

.register{
color:#8b0000;
font-weight:bold;
}

a{
text-decoration:none;
color:inherit;
}

.google-icon{
width:24px;
}

</style>

</head>

<body>

<div class="top">

<div class="logo">
FadaqData
</div>

<div class="text">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>


<div class="card">

<div class="title">
Welcome Back!
</div>

<div class="wave">👋</div>

<div class="subtitle">
Login to continue to your account
</div>

<input type="text" class="input" placeholder="Email, Username or Phone Number">

<input type="password" class="input" placeholder="Password">

<div class="row">

<div>
<input type="checkbox"> Remember Me
</div>

<a href="/forgot-password">
<div class="forgot">
Forgot Password?
</div>
</a>

</div>

<a href="/dashboard">

<button class="login-btn">
Login
</button>

</a>

<div class="or">
OR
</div>

<a href="/google-login">

<button class="google-btn">

<img class="google-icon"
src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png">

Continue with Google

</button>

</a>

<div class="bottom">

Don’t have an account?

<a href="/register">

<span class="register">
Register
</span>

</a>

</div>

</div>

</body>
</html>

`);

});



/* =========================
   GOOGLE LOGIN
========================= */

app.get("/google-login", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Google Sign In</title>

<style>

body{
background:#f5f5f5;
font-family:Arial,sans-serif;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
margin:0;
}

.box{
background:white;
padding:30px;
width:90%;
max-width:350px;
border-radius:25px;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
}

.logo{
width:70px;
margin-bottom:20px;
}

input{
width:100%;
padding:16px;
margin-top:15px;
border:2px solid #eee;
border-radius:15px;
font-size:17px;
}

button{
width:100%;
padding:16px;
margin-top:20px;
background:#b00000;
color:white;
border:none;
border-radius:15px;
font-size:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="box">

<img class="logo"
src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png">

<h2>Continue with Google</h2>

<input type="email" placeholder="Enter Gmail Address">

<button onclick="window.location.href='/register'">
Continue
</button>

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
background:linear-gradient(to right,#4b0000,#7a0000);
padding:35px 20px 100px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
position:relative;
}

.title{
text-align:center;
font-size:46px;
font-weight:bold;
margin-top:25px;
}

.subtitle{
text-align:center;
margin-top:10px;
font-size:18px;
}

.card{
background:white;
margin:-60px 20px 20px;
padding:25px;
border-radius:30px;
}

.input{
width:100%;
padding:18px;
border:2px solid #eee;
border-radius:18px;
font-size:18px;
margin-bottom:18px;
}

.btn{
width:100%;
padding:18px;
border:none;
background:linear-gradient(to right,#5a0000,#b00000);
color:white;
font-size:24px;
font-weight:bold;
border-radius:18px;
margin-top:10px;
}

.bottom{
text-align:center;
margin-top:25px;
font-size:20px;
}

.login{
color:#8b0000;
font-weight:bold;
}

a{
text-decoration:none;
color:inherit;
}

</style>

</head>

<body>

<div class="top">

<div class="title">
Create Account
</div>

<div class="subtitle">
Fill in the details below to get started
</div>

</div>


<div class="card">

<input class="input" type="text" placeholder="Full Name">

<input class="input" type="text" placeholder="Username">

<input class="input" type="email" placeholder="Email Address">

<input class="input" type="text" placeholder="Phone Number">

<input class="input" type="password" placeholder="Password">

<input class="input" type="password" placeholder="Confirm Password">

<input class="input" type="text" placeholder="Referral Code (Optional)">


<a href="/dashboard">

<button class="btn">
Create Account
</button>

</a>


<div class="bottom">

Already have an account?

<a href="/login">

<span class="login">
Login
</span>

</a>

</div>

</div>

</body>

</html>

`);

});



/* =========================
   DASHBOARD
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
background:#f3f3f3;
padding-bottom:90px;
}

.top{
background:linear-gradient(to right,#6b0000,#d10000);
padding:25px 18px 70px;
color:white;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
}

.menu{
font-size:35px;
}

.logo{
font-size:40px;
font-weight:bold;
}

.right{
display:flex;
align-items:center;
gap:12px;
}

.bell{
font-size:34px;
position:relative;
}

.badge{
position:absolute;
top:-5px;
right:-5px;
background:red;
color:white;
width:20px;
height:20px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:12px;
}

.profile{
width:55px;
height:55px;
border-radius:50%;
background:white;
color:#8b0000;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-weight:bold;
}

.alert{
background:#fff4ec;
margin:15px;
padding:16px;
border-radius:18px;
display:flex;
justify-content:space-between;
font-weight:bold;
margin-top:-40px;
}

.wallet{
background:white;
margin:15px;
padding:20px;
border-radius:22px;
}

.wallet-top{
display:flex;
justify-content:space-between;
align-items:center;
}

.balance{
font-size:17px;
margin-bottom:10px;
}

.amount{
font-size:40px;
font-weight:bold;
color:#8b0000;
}

.wallet-img{
width:90px;
height:90px;
border-radius:50%;
background:#f5f5f5;
display:flex;
align-items:center;
justify-content:center;
font-size:50px;
}

.btn-row{
display:flex;
gap:12px;
margin-top:20px;
}

.btn1{
flex:1;
padding:15px;
border:none;
border-radius:16px;
background:#970000;
color:white;
font-size:18px;
font-weight:bold;
}

.btn2{
flex:1;
padding:15px;
border-radius:16px;
border:2px solid #970000;
background:white;
color:#970000;
font-size:18px;
font-weight:bold;
}

.section{
display:flex;
justify-content:space-between;
padding:0 15px;
margin-top:10px;
}

.section h2{
font-size:22px;
}

.section span{
color:#8b0000;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:14px;
padding:15px;
}

.service{
background:white;
padding:25px 10px;
border-radius:20px;
text-align:center;
}

.icon{
font-size:38px;
margin-bottom:12px;
}

.name{
font-size:18px;
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
border-top-left-radius:20px;
border-top-right-radius:20px;
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
color:black;
}

</style>

</head>

<body>

<div class="top">

<div class="topbar">

<div class="menu">☰</div>

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



<div class="alert">

<div>
📢 MTN Share & Sell temporarily unavailable
</div>

<div>
View all
</div>

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

<button class="btn2">
Transfer
</button>

</div>

</div>



<div class="section">

<h2>Quick Services</h2>

<span>View all</span>

</div>



<div class="grid">

<a href="/airtime">
<div class="service">
<div class="icon">📱</div>
<div class="name">Airtime</div>
</div>
</a>

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
}

.top{
background:linear-gradient(to right,#5a0000,#c40000);
padding:25px 20px 80px;
color:white;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.title{
font-size:36px;
font-weight:bold;
}

.card{
background:white;
margin:-40px 15px 20px;
padding:25px;
border-radius:25px;
}

.label{
font-size:18px;
font-weight:bold;
margin-bottom:15px;
}

.networks{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
margin-bottom:20px;
}

.net{
background:#f5f5f5;
padding:18px;
border-radius:15px;
text-align:center;
font-weight:bold;
font-size:18px;
}

input{
width:100%;
padding:18px;
border:2px solid #eee;
border-radius:16px;
font-size:18px;
margin-bottom:18px;
}

button{
width:100%;
padding:18px;
border:none;
border-radius:16px;
background:#970000;
color:white;
font-size:22px;
font-weight:bold;
}

a{
text-decoration:none;
color:white;
}

.back{
font-size:30px;
}

</style>

</head>

<body>

<div class="top">

<div class="header">

<a href="/dashboard">
<div class="back">←</div>
</a>

<div class="title">Buy Airtime</div>

<div></div>

</div>

</div>


<div class="card">

<div class="label">
Select Network
</div>

<div class="networks">

<div class="net">MTN</div>
<div class="net">Airtel</div>
<div class="net">Glo</div>
<div class="net">9mobile</div>

</div>

<input type="text" placeholder="Phone Number">

<input type="number" placeholder="Amount">

<button>
Purchase Airtime
</button>

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

<a href="/dashboard">←</a>

<div class="title">
Fund Wallet
</div>

<div class="icon">❔</div>

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
