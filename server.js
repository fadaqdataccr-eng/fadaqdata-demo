const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

/* ================= LOGIN PAGE ================= */

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
background:#f5f5f5;
}

.top{
background:linear-gradient(to right,#5c0000,#ff0000);
padding:35px 25px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:55px;
font-weight:bold;
}

.slogan{
margin-top:15px;
font-size:18px;
line-height:1.5;
}

.card{
width:92%;
background:white;
margin:-55px auto 30px;
border-radius:35px;
padding:30px 25px;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
}

.welcome{
font-size:42px;
font-weight:bold;
text-align:center;
}

.wave{
font-size:45px;
text-align:center;
margin:5px 0;
}

.sub{
text-align:center;
color:gray;
margin-bottom:30px;
font-size:16px;
}

.input{
width:100%;
height:70px;
background:#ece5bb;
border:none;
border-radius:20px;
padding:0 20px;
font-size:18px;
margin-bottom:20px;
outline:none;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.remember{
display:flex;
align-items:center;
gap:10px;
font-size:16px;
}

.forgot{
color:#7d0000;
font-weight:bold;
text-decoration:none;
}

.login-btn{
width:100%;
height:75px;
border:none;
border-radius:22px;
background:linear-gradient(to right,#7d0000,#ff0000);
color:white;
font-size:26px;
font-weight:bold;
cursor:pointer;
}

.or{
text-align:center;
font-size:30px;
font-weight:bold;
color:gray;
margin:28px 0;
}

.google{
width:100%;
height:75px;
border:2px solid #eee;
border-radius:20px;
background:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
}

.bottom{
margin-top:30px;
text-align:center;
font-size:18px;
}

.bottom span{
color:#7d0000;
font-weight:bold;
}

</style>
</head>

<body>

<div class="top">

<div class="logo">FadaqData</div>

<div class="slogan">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="card">

<div class="welcome">Welcome Back!</div>

<div class="wave">👋</div>

<div class="sub">
Login to continue to your account
</div>

<input id="username" class="input"
placeholder="Email, Username or Phone Number">

<input id="password" type="password"
class="input"
placeholder="Password">

<div class="row">

<div class="remember">
<input type="checkbox">
<span>Remember Me</span>
</div>

<a class="forgot" href="/forgot-password">
Forgot Password?
</a>

</div>

<button class="login-btn" onclick="loginUser()">
Login
</button>

<div class="or">OR</div>

<button class="google" onclick="window.location.href='/register'">
Continue with Google
</button>

<div class="bottom">
Don’t have an account?
<span onclick="window.location.href='/register'">
Register
</span>
</div>

</div>

<script>

function loginUser(){

let username =
document.getElementById("username").value.trim();

let password =
document.getElementById("password").value.trim();

if(username === "" || password === ""){

alert("Please enter username and password");

return;

}

window.location.href="/dashboard";

}

</script>

</body>
</html>
`);
});

/* ================= REGISTER ================= */

app.get("/register",(req,res)=>{

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
background:#f5f5f5;
font-family:Arial;
}

.top{
background:linear-gradient(to right,#5c0000,#ff0000);
padding:35px 25px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:55px;
font-weight:bold;
}

.card{
width:92%;
background:white;
margin:-55px auto;
border-radius:35px;
padding:30px 25px;
}

.title{
text-align:center;
font-size:38px;
font-weight:bold;
margin-bottom:20px;
}

.input{
width:100%;
height:70px;
background:#ece5bb;
border:none;
border-radius:20px;
padding:0 20px;
font-size:18px;
margin-top:18px;
outline:none;
}

.btn{
width:100%;
height:75px;
border:none;
border-radius:22px;
background:linear-gradient(to right,#7d0000,#ff0000);
color:white;
font-size:24px;
font-weight:bold;
margin-top:30px;
}

.bottom{
margin-top:25px;
text-align:center;
font-size:18px;
}

.bottom span{
color:#7d0000;
font-weight:bold;
}

</style>
</head>

<body>

<div class="top">
<div class="logo">FadaqData</div>
</div>

<div class="card">

<div class="title">Create Account</div>

<input class="input" placeholder="Full Name">

<input class="input" placeholder="Email Address">

<input class="input" placeholder="Phone Number">

<input type="password"
class="input"
placeholder="Password">

<input type="password"
class="input"
placeholder="Confirm Password">

<button class="btn"
onclick="window.location.href='/dashboard'">
Create Account
</button>

<div class="bottom">
Already have an account?
<span onclick="window.location.href='/'">
Login
</span>
</div>

</div>

</body>
</html>

`);

});

/* ================= FORGOT PASSWORD ================= */

app.get("/forgot-password",(req,res)=>{

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
background:#f5f5f5;
font-family:Arial;
padding:25px;
}

.box{
background:white;
padding:25px;
border-radius:25px;
margin-top:100px;
}

h1{
margin-bottom:20px;
}

input{
width:100%;
height:65px;
background:#eee;
border:none;
border-radius:18px;
padding:0 15px;
font-size:18px;
}

button{
width:100%;
height:65px;
background:#990000;
color:white;
border:none;
border-radius:18px;
font-size:20px;
font-weight:bold;
margin-top:20px;
}

</style>
</head>

<body>

<div class="box">

<h1>Forgot Password</h1>

<input placeholder="Enter your email">

<button onclick="alert('Reset link sent successfully')">
Send Reset Link
</button>

</div>

</body>
</html>

`);

});

/* ================= DASHBOARD ================= */

app.get("/dashboard",(req,res)=>{

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

*{
box-sizing:border-box;
font-family:Arial;
}

body{
margin:0;
background:#f5f5f5;
padding-bottom:100px;
}

.header{
background:linear-gradient(to right,#5c0000,#ff0000);
padding:20px 18px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
}

.menu{
font-size:35px;
}

.logo{
font-size:34px;
font-weight:bold;
}

.profile{
width:55px;
height:55px;
border-radius:50%;
background:white;
color:#7d0000;
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
font-weight:bold;
}

.notice{
width:92%;
margin:15px auto;
background:#fff4ef;
padding:18px;
border-radius:18px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.wallet{
width:92%;
background:white;
margin:auto;
border-radius:25px;
padding:20px;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
}

.balance{
font-size:18px;
}

.amount{
font-size:54px;
font-weight:bold;
color:#8b0000;
margin-top:10px;
}

.wallet-row{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;
}

.wallet-icon{
width:85px;
height:85px;
border-radius:50%;
background:#f7f7f7;
display:flex;
justify-content:center;
align-items:center;
font-size:45px;
}

.actions{
display:flex;
gap:15px;
margin-top:20px;
}

.btn1{
flex:1;
height:58px;
border:none;
border-radius:18px;
background:#a00000;
color:white;
font-size:20px;
font-weight:bold;
}

.btn2{
flex:1;
height:58px;
border:2px solid #8b0000;
border-radius:18px;
background:white;
color:#8b0000;
font-size:20px;
font-weight:bold;
}

.section{
width:92%;
margin:25px auto 15px;
display:flex;
justify-content:space-between;
align-items:center;
}

.section h2{
font-size:22px;
}

.services{
width:92%;
margin:auto;
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.card{
background:white;
border-radius:22px;
padding:25px 10px;
text-align:center;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
font-weight:bold;
font-size:18px;
}

.icon{
font-size:38px;
margin-bottom:12px;
}

.bottomnav{
position:fixed;
bottom:0;
left:0;
right:0;
background:#a00000;
display:flex;
justify-content:space-around;
padding:12px 0;
color:white;
}

.nav{
text-align:center;
font-size:14px;
}

.navicon{
font-size:26px;
margin-bottom:5px;
}

</style>
</head>

<body>

<div class="header">

<div class="menu">☰</div>

<div class="logo">FadaqData</div>

<div class="profile">F</div>

</div>

<div class="notice">

<div>📢 MTN Share & Sell temporarily unavailable</div>

<div>View all</div>

</div>

<div class="wallet">

<div class="wallet-row">

<div>

<div class="balance">
Wallet Balance 👁️
</div>

<div class="amount">
₦25,450.00
</div>

</div>

<div class="wallet-icon">
💰
</div>

</div>

<div class="actions">

<button class="btn1"
onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

<button class="btn2">
Transfer
</button>

</div>

</div>

<div class="section">

<h2>Quick Services</h2>

<div style="color:#8b0000;font-weight:bold;">
View all
</div>

</div>

<div class="services">

<div class="card"
onclick="window.location.href='/airtime'">

<div class="icon">📱</div>

Airtime

</div>

<div class="card">

<div class="icon">📶</div>

Data

</div>

<div class="card">

<div class="icon">💸</div>

Airtime2Cash

</div>

<div class="card">

<div class="icon">📺</div>

Cable TV

</div>

<div class="card">

<div class="icon">⚡</div>

Electricity

</div>

<div class="card">

<div class="icon">🎓</div>

Exam PIN

</div>

</div>

<div class="bottomnav">

<div class="nav">
<div class="navicon">🏠</div>
Home
</div>

<div class="nav">
<div class="navicon">💼</div>
Wallet
</div>

<div class="nav">
<div class="navicon">📋</div>
Services
</div>

<div class="nav">
<div class="navicon">🧾</div>
Transactions
</div>

<div class="nav">
<div class="navicon">👤</div>
Profile
</div>

</div>

</body>
</html>

`);

});

/* ================= AIRTIME PAGE ================= */

app.get("/airtime",(req,res)=>{

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

*{
box-sizing:border-box;
font-family:Arial;
}

body{
margin:0;
background:#f5f5f5;
}

.header{
background:linear-gradient(to right,#5c0000,#ff0000);
padding:25px;
color:white;
font-size:26px;
font-weight:bold;
text-align:center;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.card{
width:92%;
margin:20px auto;
background:white;
padding:20px;
border-radius:30px;
}

.tabs{
display:flex;
gap:10px;
overflow-x:auto;
padding-bottom:10px;
}

.tabs::-webkit-scrollbar{
display:none;
}

.tab{
min-width:120px;
height:58px;
border-radius:18px;
border:2px solid #ddd;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
font-weight:bold;
background:white;
}

.active{
background:#8b0000;
color:white;
border:none;
}

.title{
font-size:22px;
font-weight:bold;
margin:25px 0 15px;
}

.networks{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.network{
height:90px;
border:2px solid #eee;
border-radius:22px;
display:flex;
justify-content:center;
align-items:center;
font-size:26px;
font-weight:bold;
background:white;
}

.mtn{
background:#ffd500;
}

.airtel{
color:red;
}

.glo{
color:green;
}

.mobile{
color:#0a7f36;
}

.input{
width:100%;
height:68px;
border:2px solid #eee;
border-radius:18px;
padding:0 15px;
font-size:18px;
margin-top:20px;
outline:none;
}

.amounts{
display:flex;
flex-wrap:wrap;
gap:12px;
margin-top:20px;
}

.amt{
padding:15px 20px;
border-radius:16px;
border:2px solid #ddd;
font-size:18px;
font-weight:bold;
background:white;
}

.selected{
background:#8b0000;
color:white;
border:none;
}

.summary{
margin-top:25px;
border:2px solid #eee;
border-radius:22px;
padding:20px;
display:flex;
justify-content:space-between;
font-size:18px;
font-weight:bold;
}

.summary b{
font-size:22px;
display:block;
margin-top:12px;
}

.btn{
width:100%;
height:72px;
border:none;
border-radius:22px;
background:linear-gradient(to right,#7d0000,#ff0000);
color:white;
font-size:28px;
font-weight:bold;
margin-top:25px;
}

</style>
</head>

<body>

<div class="header">
Buy Airtime
</div>

<div class="card">

<div class="tabs">

<div class="tab active">VTU</div>

<div class="tab">Share & Sell</div>

<div class="tab">MoMo</div>

<div class="tab">GistPlus</div>

</div>

<div class="title">Network</div>

<div class="networks">

<div class="network mtn">
MTN
</div>

<div class="network airtel">
Airtel
</div>

<div class="network glo">
Glo
</div>

<div class="network mobile">
9mobile
</div>

</div>

<input class="input"
placeholder="📞 Enter phone number">

<div class="title">Amount</div>

<div class="amounts">

<div class="amt">₦100</div>

<div class="amt selected">₦200</div>

<div class="amt">₦500</div>

<div class="amt">₦1,000</div>

<div class="amt">Other</div>

</div>

<div class="summary">

<div>
You Pay
<b>₦200.00</b>
</div>

<div>
You Receive
<b>₦200</b>
</div>

</div>

<button class="btn"
onclick="buyAirtime()">
Buy Airtime
</button>

</div>

<script>

function buyAirtime(){

alert("Airtime purchase successful");

window.location.href="/dashboard";

}

</script>

</body>
</html>

`);

});

/* ================= FUND WALLET ================= */

app.get("/fund-wallet",(req,res)=>{

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
background:#f5f5f5;
font-family:Arial;
}

.header{
background:linear-gradient(to right,#5c0000,#ff0000);
padding:25px;
color:white;
font-size:26px;
font-weight:bold;
text-align:center;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.card{
width:92%;
background:white;
margin:20px auto;
padding:20px;
border-radius:30px;
}

.bank{
background:#f8f3e8;
padding:25px;
border-radius:25px;
font-size:20px;
line-height:2;
font-weight:bold;
}

.input{
width:100%;
height:68px;
border:2px solid #eee;
border-radius:18px;
padding:0 15px;
font-size:18px;
margin-top:20px;
}

.btn{
width:100%;
height:72px;
border:none;
border-radius:22px;
background:#990000;
color:white;
font-size:24px;
font-weight:bold;
margin-top:25px;
}

.secure{
text-align:center;
margin-top:20px;
color:gray;
}

</style>
</head>

<body>

<div class="header">
Fund Wallet
</div>

<div class="card">

<div class="bank">

Bank Name<br>
Providus Bank<br><br>

Account Name<br>
FadaqData - John O.<br><br>

Account Number<br>
1234567890

</div>

<input class="input"
placeholder="Enter amount">

<input class="input"
placeholder="Reference ID / Description">

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

/* ================= SERVER ================= */

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
