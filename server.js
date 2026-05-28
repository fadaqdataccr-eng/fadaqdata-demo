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

<title>FadaqData</title>

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
padding:40px 25px 100px;
border-bottom-left-radius:45px;
border-bottom-right-radius:45px;
color:white;
}

.logo{
font-size:70px;
font-weight:bold;
}

.slogan{
font-size:20px;
margin-top:15px;
line-height:1.5;
}

.card{
background:white;
width:92%;
margin:-70px auto 20px;
padding:30px 25px;
border-radius:35px;
box-shadow:0 4px 15px rgba(0,0,0,0.08);
}

.welcome{
font-size:48px;
font-weight:bold;
text-align:center;
}

.wave{
text-align:center;
font-size:55px;
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
background:#f4efc8;
border:none;
outline:none;
border-radius:18px;
font-size:18px;
margin-bottom:20px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.forgot{
text-decoration:none;
color:#7a0000;
font-weight:bold;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:25px;
font-weight:bold;
margin-bottom:20px;
}

.or{
text-align:center;
font-size:35px;
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
font-size:22px;
font-weight:bold;
}

.bottom{
text-align:center;
margin-top:25px;
font-size:20px;
}

.bottom a{
text-decoration:none;
color:#7a0000;
font-weight:bold;
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



<input id="username" class="input" type="text" placeholder="Email, Username or Phone Number">

<input id="password" class="input" type="password" placeholder="Password">



<div class="row">

<div>
<input type="checkbox">
Remember Me
</div>

<a href="/forgot-password" class="forgot">
Forgot Password?
</a>

</div>



<button class="btn" onclick="login()">
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



<script>

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){

alert("Please enter username and password");

}else{

window.location.href="/dashboard";

}

}

</script>

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
border-bottom-left-radius:45px;
border-bottom-right-radius:45px;
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
}

.title{
font-size:42px;
font-weight:bold;
text-align:center;
margin-bottom:25px;
}

.input{
width:100%;
padding:18px;
border:none;
outline:none;
background:#f4efc8;
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
font-size:24px;
font-weight:bold;
}

.bottom{
text-align:center;
margin-top:25px;
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
padding-bottom:100px;
}

.top{
background:linear-gradient(to right,#4b0000,#d00000);
padding:20px;
color:white;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:42px;
font-weight:bold;
}

.circle{
width:60px;
height:60px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:35px;
font-weight:bold;
color:#7a0000;
}

.notice{
background:#fff4ef;
margin:15px;
padding:18px;
border-radius:18px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.wallet{
background:white;
margin:15px;
padding:22px;
border-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
}

.balance{
font-size:22px;
margin-bottom:15px;
}

.money{
font-size:55px;
font-weight:bold;
color:#8b0000;
margin-bottom:20px;
}

.actions{
display:flex;
gap:15px;
}

.fund{
padding:16px 22px;
background:#a00000;
border:none;
color:white;
border-radius:18px;
font-size:18px;
font-weight:bold;
}

.transfer{
padding:16px 22px;
background:white;
border:2px solid #a00000;
color:#a00000;
border-radius:18px;
font-size:18px;
font-weight:bold;
}

.walleticon{
width:90px;
height:90px;
background:#f3f3f3;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:55px;
}

.section{
margin:15px;
display:flex;
justify-content:space-between;
align-items:center;
}

.section h2{
font-size:22px;
}

.services{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
padding:15px;
}

.service{
background:white;
padding:30px 20px;
border-radius:20px;
text-align:center;
font-size:18px;
font-weight:bold;
}

.icon{
font-size:45px;
margin-bottom:15px;
}

.bottomnav{
position:fixed;
bottom:0;
width:100%;
background:#a00000;
display:flex;
justify-content:space-around;
padding:15px 0;
}

.nav{
text-align:center;
color:white;
font-size:15px;
text-decoration:none;
}

.navicon{
font-size:28px;
margin-bottom:5px;
}

</style>

</head>

<body>

<div class="top">

<div class="header">

<div style="font-size:40px;">
☰
</div>

<div class="logo">
FadaqData
</div>

<div class="circle">
F
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

<div class="balance">
Wallet Balance 👁️
</div>

<div class="money">
₦25,450.00
</div>

<div class="actions">

<button class="fund" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

<button class="transfer">
Transfer
</button>

</div>

</div>

<div class="walleticon">
💰
</div>

</div>



<div class="section">

<h2>
Quick Services
</h2>

<div style="color:#8b0000;font-weight:bold;">
View all
</div>

</div>



<div class="services">

<div class="service" onclick="window.location.href='/airtime'">

<div class="icon">
📱
</div>

Airtime

</div>



<div class="service">

<div class="icon">
📶
</div>

Data

</div>



<div class="service">

<div class="icon">
💸
</div>

Airtime2Cash

</div>



<div class="service">

<div class="icon">
📺
</div>

Cable TV

</div>



<div class="service">

<div class="icon">
⚡
</div>

Electricity

</div>



<div class="service">

<div class="icon">
🎓
</div>

Exam PIN

</div>

</div>



<div class="bottomnav">

<a href="/dashboard" class="nav">
<div class="navicon">🏠</div>
Home
</a>

<a href="/fund-wallet" class="nav">
<div class="navicon">💼</div>
Wallet
</a>

<a href="#" class="nav">
<div class="navicon">📋</div>
Services
</a>

<a href="#" class="nav">
<div class="navicon">🧾</div>
Transactions
</a>

<a href="#" class="nav">
<div class="navicon">👤</div>
Profile
</a>

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
background:linear-gradient(to right,#4b0000,#d00000);
padding:20px 20px 70px;
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
font-size:35px;
text-decoration:none;
color:white;
}

.title{
font-size:38px;
font-weight:bold;
}

.help{
font-size:35px;
}

.card{
background:white;
margin:-45px 15px 20px;
padding:20px;
border-radius:30px;
}

.tabs{
display:flex;
gap:10px;
overflow:auto;
margin-bottom:25px;
}

.tab{
min-width:120px;
padding:15px;
border-radius:18px;
border:2px solid #eee;
text-align:center;
font-weight:bold;
font-size:20px;
}

.active{
background:linear-gradient(to right,#5a0000,#a00000);
color:white;
border:none;
}

.label{
font-size:20px;
font-weight:bold;
margin-bottom:15px;
}

.networks{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
margin-bottom:25px;
}

.network{
background:white;
border:2px solid #eee;
border-radius:20px;
padding:18px;
display:flex;
align-items:center;
justify-content:center;
}

.network img{
width:80px;
height:80px;
object-fit:contain;
}

.input{
width:100%;
padding:22px;
border-radius:20px;
border:2px solid #eee;
font-size:18px;
margin-bottom:25px;
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
border:2px solid #eee;
background:white;
font-size:18px;
font-weight:bold;
text-align:center;
}

.activeamount{
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

.summarybox{
flex:1;
padding:20px;
}

.small{
font-size:18px;
color:gray;
margin-bottom:10px;
}

.big{
font-size:22px;
font-weight:bold;
}

.buy{
width:100%;
padding:20px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#5a0000,#a00000);
color:white;
font-size:30px;
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

<div class="tab active">
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
<img src="https://i.imgur.com/Q3QZ6mU.png">
</div>

<div class="network">
<img src="https://i.imgur.com/0XqQ0Qp.png">
</div>

<div class="network">
<img src="https://i.imgur.com/5cLDeYV.png">
</div>

<div class="network">
<img src="https://i.imgur.com/Xd8JX4x.png">
</div>

</div>



<div class="label">
Phone Number
</div>

<input class="input" type="text" placeholder="📞 Enter phone number">



<div class="label">
Amount
</div>



<div class="amounts">

<div class="amount">
₦100
</div>

<div class="amount activeamount">
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

<div class="summarybox">

<div class="small">
You Pay
</div>

<div class="big">
₦200.00
</div>

</div>

<div class="summarybox">

<div class="small">
You Receive
</div>

<div class="big">
₦200
</div>

</div>

</div>



<button class="buy">
Buy Airtime
</button>

</div>

</body>
</html>

`);

});



/* =========================
   FUND WALLET
========================= */

app.get("/fund-wallet", (req, res) => {

res.send("<h1>Fund Wallet Page</h1>");

});



/* =========================
   FORGOT PASSWORD
========================= */

app.get("/forgot-password", (req, res) => {

res.send("<h1>Forgot Password Page</h1>");

});



app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
