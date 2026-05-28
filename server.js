const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;



/* =========================
   LOGIN PAGE
========================= */

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
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
min-height:100vh;
}

.top{
background:linear-gradient(to right,#5b0000,#d60000);
padding:40px 25px 120px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
position:relative;
}

.logo{
font-size:58px;
font-weight:bold;
}

.subtitle{
font-size:18px;
margin-top:15px;
line-height:1.5;
}

.dark-btn{
position:absolute;
right:20px;
top:20px;
background:white;
padding:8px 18px;
border-radius:25px;
color:#5b0000;
font-weight:bold;
}

.card{
background:white;
width:90%;
margin:-70px auto 30px;
border-radius:30px;
padding:35px 25px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.welcome{
font-size:40px;
font-weight:bold;
text-align:center;
}

.wave{
font-size:50px;
text-align:center;
margin-top:10px;
}

.small{
text-align:center;
color:gray;
margin:20px 0 35px;
font-size:16px;
}

.input-box{
background:#f3efc6;
border-radius:20px;
padding:18px;
margin-bottom:20px;
}

.input{
width:100%;
border:none;
outline:none;
background:none;
font-size:18px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin:10px 0 25px;
font-size:16px;
}

.forget{
color:#7a0000;
font-weight:bold;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#5b0000,#e00000);
color:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
}

.or{
text-align:center;
font-size:24px;
font-weight:bold;
color:gray;
margin:30px 0;
}

.google{
border:2px solid #eee;
padding:20px;
border-radius:20px;
text-align:center;
font-size:18px;
font-weight:bold;
cursor:pointer;
background:white;
}

.bottom{
margin-top:35px;
text-align:center;
font-size:18px;
}

.register{
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

</style>

</head>

<body>

<div class="top">

<div class="dark-btn">🌙 Dark</div>

<div class="logo">FadaqData</div>

<div class="subtitle">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="card">

<div class="welcome">Welcome Back!</div>

<div class="wave">👋</div>

<div class="small">
Login to continue to your account
</div>

<div class="input-box">
<input type="text" class="input" placeholder="Email, Username or Phone Number">
</div>

<div class="input-box">
<input type="password" class="input" placeholder="Password">
</div>

<div class="row">

<div>
<input type="checkbox">
Remember Me
</div>

<div class="forget" onclick="window.location.href='/forgot-password'">
Forgot Password?
</div>

</div>

<button class="btn" onclick="window.location.href='/dashboard'">
Login
</button>

<div class="or">OR</div>

<div class="google" onclick="window.location.href='/register'">
Continue with Google
</div>

<div class="bottom">
Don't have an account?
<span class="register" onclick="window.location.href='/register'">
Register
</span>
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
background:linear-gradient(to right,#4d0000,#6d0000);
padding:30px 25px 110px;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
color:white;
position:relative;
}

.back{
font-size:30px;
cursor:pointer;
}

.dark{
position:absolute;
right:20px;
top:20px;
background:white;
color:#5b0000;
padding:8px 18px;
border-radius:20px;
font-weight:bold;
}

.title{
text-align:center;
font-size:42px;
font-weight:bold;
margin-top:40px;
}

.sub{
text-align:center;
font-size:18px;
margin-top:10px;
}

.card{
background:white;
width:90%;
margin:-70px auto 30px;
border-radius:30px;
padding:30px 20px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.input-box{
border:2px solid #eee;
border-radius:20px;
padding:18px;
margin-bottom:18px;
}

.input{
width:100%;
border:none;
outline:none;
font-size:18px;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#4d0000,#8b0000);
color:white;
font-size:24px;
font-weight:bold;
margin-top:15px;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:30px;
font-size:18px;
}

.login{
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

</style>

</head>

<body>

<div class="top">

<div class="back" onclick="window.location.href='/'">←</div>

<div class="dark">🌙 Dark</div>

<div class="title">Create Account</div>

<div class="sub">
Fill in the details below to get started
</div>

</div>

<div class="card">

<div class="input-box">
<input type="text" class="input" placeholder="Full Name">
</div>

<div class="input-box">
<input type="text" class="input" placeholder="Username">
</div>

<div class="input-box">
<input type="email" class="input" placeholder="Email Address">
</div>

<div class="input-box">
<input type="text" class="input" placeholder="Phone Number">
</div>

<div class="input-box">
<input type="password" class="input" placeholder="Password">
</div>

<div class="input-box">
<input type="password" class="input" placeholder="Confirm Password">
</div>

<div class="input-box">
<input type="text" class="input" placeholder="Referral Code (Optional)">
</div>

<button class="btn" onclick="window.location.href='/dashboard'">
Create Account
</button>

<div class="bottom">
Already have an account?
<span class="login" onclick="window.location.href='/'">
Login
</span>
</div>

</div>

</body>
</html>

`);

});



/* =========================
   FORGOT PASSWORD
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
background:#f5f5f5;
font-family:Arial,sans-serif;
padding:30px;
}

.card{
background:white;
padding:30px;
border-radius:25px;
margin-top:100px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

h1{
margin-bottom:20px;
color:#7a0000;
}

input{
width:100%;
padding:18px;
border-radius:15px;
border:2px solid #eee;
margin-top:15px;
font-size:18px;
}

button{
width:100%;
padding:18px;
border:none;
border-radius:15px;
margin-top:25px;
background:#8b0000;
color:white;
font-size:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="card">

<h1>Forgot Password</h1>

<p>Enter your email address</p>

<input type="email" placeholder="Email Address">

<button onclick="alert('Reset Link Sent')">
Send Reset Link
</button>

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
background:#f5f5f5;
padding-bottom:120px;
}

.header{
background:linear-gradient(to right,#5b0000,#d00000);
padding:25px 20px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
}

.menu{
font-size:38px;
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
font-size:35px;
position:relative;
}

.badge{
position:absolute;
top:-10px;
right:-8px;
background:red;
color:white;
width:24px;
height:24px;
border-radius:50%;
font-size:14px;
display:flex;
align-items:center;
justify-content:center;
}

.profile{
width:60px;
height:60px;
border-radius:50%;
background:white;
color:#7a0000;
display:flex;
align-items:center;
justify-content:center;
font-size:32px;
font-weight:bold;
}

.notice{
background:#fff7ef;
margin:15px;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
font-size:16px;
font-weight:bold;
}

.wallet{
background:white;
margin:15px;
padding:25px;
border-radius:25px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.wallet-top{
display:flex;
justify-content:space-between;
align-items:center;
}

.balance{
font-size:18px;
margin-bottom:15px;
}

.amount{
font-size:58px;
font-weight:bold;
color:#8b0000;
}

.wallet-img{
font-size:90px;
}

.btn-row{
display:flex;
gap:15px;
margin-top:20px;
}

.btn1{
flex:1;
padding:18px;
border:none;
border-radius:18px;
background:#970000;
color:white;
font-size:22px;
font-weight:bold;
}

.btn2{
flex:1;
padding:18px;
border-radius:18px;
border:2px solid #970000;
background:white;
color:#970000;
font-size:22px;
font-weight:bold;
}

.section{
display:flex;
justify-content:space-between;
padding:10px 18px;
align-items:center;
}

.section h2{
font-size:24px;
}

.view{
color:#8b0000;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
padding:15px;
}

.service{
background:white;
border-radius:20px;
padding:30px 20px;
text-align:center;
box-shadow:0 4px 10px rgba(0,0,0,0.05);
}

.icon{
font-size:45px;
margin-bottom:15px;
}

.name{
font-size:24px;
font-weight:bold;
}

.transaction{
background:white;
margin:15px;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 4px 10px rgba(0,0,0,0.05);
}

.left{
display:flex;
gap:15px;
align-items:center;
}

.mtn{
width:60px;
height:60px;
border-radius:15px;
background:gold;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:20px;
}

.t1{
font-size:24px;
font-weight:bold;
}

.t2{
color:gray;
margin-top:5px;
}

.amount2{
color:#8b0000;
font-size:28px;
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
padding:15px 0;
border-top-left-radius:25px;
border-top-right-radius:25px;
}

.nav{
text-align:center;
color:white;
font-size:16px;
}

.nav-icon{
font-size:30px;
margin-bottom:5px;
}

</style>

</head>

<body>

<div class="header">

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



<div class="notice">

<div>📢 MTN Share & Sell temporarily unavailable</div>

<div style="color:#8b0000;">View all</div>

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

<div class="btn-row">

<button class="btn1" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

<button class="btn2">
Transfer
</button>

</div>

</div>

<div class="wallet-img">
👛
</div>

</div>

</div>



<div class="section">

<h2>Quick Services</h2>

<div class="view">View all</div>

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



<div class="section">

<h2>Recent Transactions</h2>

<div class="view">View all</div>

</div>



<div class="transaction">

<div class="left">

<div class="mtn">
MTN
</div>

<div>

<div class="t1">
MTN 10GB Data
</div>

<div class="t2">
May 20, 2026 • 10:45 AM
</div>

</div>

</div>

<div class="amount2">
- ₦1,050
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
   FUND WALLET
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
background:linear-gradient(to right,#4d0000,#7a0000);
padding:30px 20px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
display:flex;
justify-content:space-between;
align-items:center;
}

.back{
font-size:32px;
cursor:pointer;
}

.title{
font-size:42px;
font-weight:bold;
}

.help{
font-size:35px;
}

.card{
background:white;
width:90%;
margin:-60px auto 30px;
padding:30px 20px;
border-radius:30px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
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
background:#faf5ea;
padding:30px;
border-radius:25px;
margin-bottom:25px;
}

.label{
color:gray;
font-size:16px;
margin-bottom:10px;
}

.value{
font-size:28px;
font-weight:bold;
margin-bottom:30px;
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
padding:22px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#4d0000,#8b0000);
color:white;
font-size:28px;
font-weight:bold;
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

<div class="back" onclick="window.location.href='/dashboard'">
←
</div>

<div class="title">
Fund Wallet
</div>

<div class="help">
❔
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



<input class="input" placeholder="Enter amount">

<input class="input" placeholder="Reference ID / Description (Optional)">

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
