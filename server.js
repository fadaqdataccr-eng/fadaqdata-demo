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
background:linear-gradient(to right,#5c0000,#e00000);
padding:35px 25px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:58px;
font-weight:bold;
}

.slogan{
font-size:18px;
margin-top:15px;
line-height:1.5;
}

.card{
width:92%;
background:white;
margin:-55px auto 30px;
border-radius:35px;
padding:30px 25px;
box-shadow:0 3px 12px rgba(0,0,0,0.08);
}

.welcome{
font-size:38px;
font-weight:bold;
text-align:center;
}

.wave{
font-size:50px;
text-align:center;
margin-top:5px;
}

.sub{
text-align:center;
color:gray;
margin:12px 0 30px;
font-size:16px;
}

.input{
width:100%;
height:70px;
border:none;
background:#ece5bb;
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
font-size:24px;
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
background:white;
border:2px solid #eee;
border-radius:20px;
font-size:20px;
font-weight:bold;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:35px;
font-size:18px;
}

.bottom span{
color:#7d0000;
font-weight:bold;
cursor:pointer;
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

<input type="text" id="username" class="input" placeholder="Email, Username or Phone Number">

<input type="password" id="password" class="input" placeholder="Password">

<div class="row">

<div class="remember">
<input type="checkbox">
<span>Remember Me</span>
</div>

<a href="/forgot-password" class="forgot">
Forgot Password?
</a>

</div>

<button class="login-btn" onclick="loginUser()">
Login
</button>

<div class="or">OR</div>

<button class="google" onclick="googleLogin()">
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

function googleLogin(){

window.location.href="/register";

}

</script>

</body>
</html>
`);
});

/* ================= REGISTER PAGE ================= */

app.get("/register", (req, res) => {

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
background:linear-gradient(to right,#5c0000,#e00000);
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
}

.input{
width:100%;
height:70px;
border:none;
background:#ece5bb;
border-radius:20px;
padding:0 20px;
font-size:18px;
margin-top:20px;
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
text-align:center;
margin-top:25px;
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

<input type="password" class="input" placeholder="Password">

<input type="password" class="input" placeholder="Confirm Password">

<button class="btn" onclick="window.location.href='/dashboard'">
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

app.get("/forgot-password", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
font-family:Arial;
background:#f5f5f5;
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
border:none;
background:#eee;
border-radius:18px;
padding:0 15px;
font-size:18px;
}

button{
width:100%;
height:65px;
border:none;
background:#990000;
color:white;
font-size:20px;
border-radius:18px;
margin-top:20px;
}

</style>
</head>

<body>

<div class="box">

<h1>Forgot Password</h1>

<input placeholder="Enter your email">

<button onclick="alert('Password reset link sent')">
Send Reset Link
</button>

</div>

</body>
</html>

`);

});

/* ================= DASHBOARD ================= */

app.get("/dashboard", (req, res) => {

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
padding-bottom:100px;
}

.header{
background:linear-gradient(to right,#5c0000,#e00000);
padding:25px 18px;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:34px;
font-weight:bold;
}

.profile{
width:55px;
height:55px;
background:white;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
font-weight:bold;
color:#7d0000;
}

.notice{
width:92%;
margin:18px auto;
background:#fff3ef;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.wallet{
width:92%;
margin:auto;
background:white;
border-radius:25px;
padding:22px;
}

.balance{
font-size:20px;
}

.amount{
font-size:58px;
font-weight:bold;
color:#8b0000;
margin-top:10px;
}

.actions{
display:flex;
gap:15px;
margin-top:20px;
}

.btn1{
flex:1;
background:#a00000;
color:white;
height:60px;
border:none;
border-radius:18px;
font-size:22px;
font-weight:bold;
}

.btn2{
flex:1;
background:white;
color:#8b0000;
height:60px;
border:2px solid #8b0000;
border-radius:18px;
font-size:22px;
font-weight:bold;
}

.section{
width:92%;
margin:25px auto;
display:flex;
justify-content:space-between;
align-items:center;
}

.section h2{
font-size:24px;
}

.services{
width:92%;
margin:auto;
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
}

.card{
background:white;
border-radius:22px;
padding:30px 15px;
text-align:center;
font-size:18px;
font-weight:bold;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
}

.icon{
font-size:45px;
margin-bottom:15px;
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
font-size:15px;
}

.navitem{
text-align:center;
}

</style>
</head>

<body>

<div class="header">

<div style="font-size:40px;">☰</div>

<div class="logo">FadaqData</div>

<div class="profile">F</div>

</div>

<div class="notice">
<div>📢 MTN Share & Sell temporarily unavailable</div>
<div>View all</div>
</div>

<div class="wallet">

<div class="balance">Wallet Balance 👁️</div>

<div class="amount">₦25,450.00</div>

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

<div class="navitem">🏠<br>Home</div>

<div class="navitem">💼<br>Wallet</div>

<div class="navitem">📋<br>Services</div>

<div class="navitem">🧾<br>Transactions</div>

<div class="navitem">👤<br>Profile</div>

</div>

</body>
</html>

`);

});

/* ================= FUND WALLET ================= */

app.get("/fund-wallet", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
font-family:Arial;
background:#f5f5f5;
}

.header{
background:linear-gradient(to right,#5c0000,#e00000);
padding:25px;
color:white;
font-size:26px;
font-weight:bold;
text-align:center;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
}

.card{
width:92%;
background:white;
margin:20px auto;
padding:20px;
border-radius:30px;
}

.bank{
background:#f7f2e7;
padding:25px;
border-radius:25px;
line-height:2;
font-size:20px;
font-weight:bold;
}

.input{
width:100%;
height:65px;
margin-top:20px;
border:2px solid #eee;
border-radius:18px;
padding:0 15px;
font-size:18px;
}

.btn{
width:100%;
height:70px;
border:none;
border-radius:20px;
background:#990000;
color:white;
font-size:26px;
font-weight:bold;
margin-top:25px;
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

<input class="input" placeholder="Enter amount">

<input class="input"
placeholder="Reference ID / Description">

<button class="btn">
Proceed to Pay
</button>

</div>

</body>
</html>

`);

});

/* ================= AIRTIME ================= */

app.get("/airtime", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
font-family:Arial;
background:#f5f5f5;
}

.header{
background:linear-gradient(to right,#5c0000,#e00000);
padding:25px;
color:white;
font-size:26px;
font-weight:bold;
text-align:center;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
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
overflow:auto;
margin-bottom:20px;
}

.tab{
min-width:120px;
height:55px;
border-radius:18px;
border:2px solid #ddd;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
}

.active{
background:#8b0000;
color:white;
border:none;
}

.title{
font-size:22px;
font-weight:bold;
margin:20px 0;
}

.networks{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.net{
background:#fff;
border:2px solid #eee;
border-radius:20px;
padding:20px;
text-align:center;
font-weight:bold;
font-size:22px;
}

.input{
width:100%;
height:65px;
border:2px solid #eee;
border-radius:18px;
padding:0 15px;
font-size:18px;
margin-top:18px;
}

.amounts{
display:flex;
gap:10px;
flex-wrap:wrap;
margin-top:20px;
}

.amt{
padding:15px 20px;
border-radius:15px;
border:2px solid #ddd;
font-weight:bold;
font-size:20px;
}

.selected{
background:#8b0000;
color:white;
border:none;
}

.summary{
margin-top:20px;
border:2px solid #eee;
border-radius:20px;
padding:20px;
display:flex;
justify-content:space-between;
font-size:24px;
font-weight:bold;
}

.btn{
width:100%;
height:70px;
background:#990000;
color:white;
border:none;
border-radius:20px;
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

<div class="net">MTN</div>

<div class="net">Airtel</div>

<div class="net">Glo</div>

<div class="net">9mobile</div>

</div>

<input class="input"
placeholder="Enter phone number">

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
You Pay<br><br>
₦200.00
</div>

<div>
You Receive<br><br>
₦200
</div>

</div>

<button class="btn">
Buy Airtime
</button>

</div>

</body>
</html>

`);

});

/* ================= SERVER ================= */

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
