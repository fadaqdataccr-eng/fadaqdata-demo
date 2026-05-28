const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;



// LOGIN PAGE
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
min-height:100vh;
}

.header{
background:linear-gradient(to right,#2b0000,#ff0000);
padding:40px 30px 120px;
color:white;
position:relative;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:55px;
font-weight:bold;
}

.subtitle{
font-size:18px;
margin-top:15px;
line-height:1.5;
}

.card{
background:white;
width:90%;
max-width:500px;
margin:auto;
margin-top:-70px;
border-radius:35px;
padding:35px 30px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.welcome{
font-size:42px;
font-weight:bold;
text-align:center;
}

.wave{
text-align:center;
font-size:50px;
margin-top:5px;
}

.desc{
text-align:center;
color:gray;
margin-top:10px;
font-size:18px;
}

.input{
width:100%;
padding:22px;
border:none;
outline:none;
background:#f2edb8;
border-radius:20px;
font-size:18px;
margin-top:25px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:25px;
font-size:16px;
}

.forgot{
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

.btn{
width:100%;
padding:22px;
margin-top:30px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
}

.or{
text-align:center;
margin:35px 0 20px;
font-size:25px;
font-weight:bold;
color:gray;
}

.google{
border:2px solid #eee;
padding:22px;
border-radius:20px;
text-align:center;
font-size:20px;
font-weight:bold;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:35px;
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

<div class="header">

<div class="logo">
FadaqData
</div>

<div class="subtitle">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="card">

<div class="welcome">
Welcome Back!
</div>

<div class="wave">👋</div>

<div class="desc">
Login to continue to your account
</div>

<input type="text" class="input" placeholder="Email, Username or Phone Number">

<input type="password" class="input" placeholder="Password">

<div class="row">

<div>
<input type="checkbox"> Remember Me
</div>

<div class="forgot" onclick="window.location.href='/forgot-password'">
Forgot Password?
</div>

</div>

<button class="btn" onclick="window.location.href='/dashboard'">
Login
</button>

<div class="or">
OR
</div>

<div class="google" onclick="window.location.href='/register'">
Continue with Google
</div>

<div class="bottom">
Don’t have an account?
<span class="register" onclick="window.location.href='/register'">
Register
</span>
</div>

</div>

</body>
</html>

`);

});




// REGISTER PAGE
app.get("/register", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
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
min-height:100vh;
padding-bottom:40px;
}

.header{
background:linear-gradient(to right,#2b0000,#7a0000);
padding:30px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.back{
font-size:35px;
cursor:pointer;
}

.title{
font-size:45px;
font-weight:bold;
margin-top:20px;
text-align:center;
}

.sub{
text-align:center;
margin-top:10px;
font-size:18px;
}

.card{
background:white;
width:90%;
max-width:500px;
margin:auto;
margin-top:-20px;
border-radius:30px;
padding:30px;
}

.input{
width:100%;
padding:20px;
margin-top:18px;
border:2px solid #eee;
border-radius:18px;
font-size:17px;
outline:none;
}

.btn{
width:100%;
padding:22px;
margin-top:25px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:22px;
font-weight:bold;
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

<div class="header">

<div class="back" onclick="window.location.href='/'">
←
</div>

<div class="title">
Create Account
</div>

<div class="sub">
Fill in the details below to get started
</div>

</div>

<div class="card">

<input type="text" class="input" placeholder="Full Name">

<input type="text" class="input" placeholder="Username">

<input type="email" class="input" placeholder="Email Address">

<input type="text" class="input" placeholder="Phone Number">

<input type="password" class="input" placeholder="Password">

<input type="password" class="input" placeholder="Confirm Password">

<input type="text" class="input" placeholder="Referral Code (Optional)">

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




// FORGOT PASSWORD PAGE
app.get("/forgot-password", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
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

.box{
background:white;
padding:30px;
border-radius:20px;
max-width:500px;
margin:auto;
margin-top:80px;
}

h1{
color:#7a0000;
margin-bottom:20px;
}

input{
width:100%;
padding:18px;
border-radius:15px;
border:1px solid #ddd;
margin-top:20px;
font-size:18px;
}

button{
width:100%;
padding:18px;
margin-top:20px;
border:none;
border-radius:15px;
background:#7a0000;
color:white;
font-size:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="box">

<h1>Forgot Password</h1>

<p>Enter your email address to reset password.</p>

<input type="email" placeholder="Email Address">

<button onclick="alert('Reset link sent successfully')">
Send Reset Link
</button>

</div>

</body>
</html>

`);

});




// DASHBOARD PAGE
app.get("/dashboard", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
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

.header{
background:linear-gradient(to right,#2b0000,#7a0000);
padding:30px;
color:white;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
}

.logo{
font-size:55px;
font-weight:bold;
}

.subtext{
font-size:20px;
margin-top:10px;
line-height:1.5;
}

.balance-card{
background:white;
width:90%;
margin:auto;
margin-top:-20px;
padding:25px;
border-radius:25px;
box-shadow:0 3px 10px rgba(0,0,0,0.08);
}

.balance-title{
font-size:18px;
color:#666;
}

.balance{
font-size:40px;
font-weight:bold;
margin-top:10px;
color:#7a0000;
}

.actions{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
width:90%;
margin:25px auto;
}

.action-btn{
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
padding:22px;
border-radius:20px;
text-align:center;
font-size:20px;
font-weight:bold;
cursor:pointer;
}

.section{
width:90%;
margin:auto;
margin-top:10px;
}

.section-title{
font-size:25px;
font-weight:bold;
margin-bottom:15px;
}

.service-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.service{
background:white;
padding:25px;
border-radius:20px;
text-align:center;
box-shadow:0 2px 8px rgba(0,0,0,0.05);
font-size:18px;
font-weight:bold;
cursor:pointer;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
background:white;
display:flex;
justify-content:space-around;
padding:15px;
box-shadow:0 -2px 10px rgba(0,0,0,0.08);
}

.nav-item{
text-align:center;
font-size:15px;
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

.nav-icon{
font-size:24px;
margin-bottom:5px;
}

</style>

</head>

<body>

<div class="header">

<div class="logo">
FadaqData
</div>

<div class="subtext">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="balance-card">

<div class="balance-title">
Wallet Balance
</div>

<div class="balance">
₦50,000
</div>

</div>

<div class="actions">

<div class="action-btn" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</div>

<div class="action-btn">
Withdraw
</div>

</div>

<div class="section">

<div class="section-title">
Services
</div>

<div class="service-grid">

<div class="service">
📶 <br><br>
Buy Data
</div>

<div class="service">
📱 <br><br>
Airtime
</div>

<div class="service">
💡 <br><br>
Electricity
</div>

<div class="service">
📺 <br><br>
Cable TV
</div>

</div>

</div>

<div class="bottom-nav">

<div class="nav-item">
<div class="nav-icon">🏠</div>
Home
</div>

<div class="nav-item" onclick="window.location.href='/fund-wallet'">
<div class="nav-icon">💼</div>
Wallet
</div>

<div class="nav-item">
<div class="nav-icon">📋</div>
Services
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




// FUND WALLET PAGE
app.get("/fund-wallet", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="en">
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
padding-bottom:40px;
}

.header{
background:linear-gradient(to right,#2b0000,#7a0000);
padding:25px;
color:white;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
display:flex;
justify-content:space-between;
align-items:center;
}

.title{
font-size:35px;
font-weight:bold;
}

.back{
font-size:35px;
cursor:pointer;
}

.card{
background:white;
width:90%;
margin:auto;
margin-top:-20px;
padding:25px;
border-radius:25px;
}

.tabs{
display:flex;
justify-content:space-between;
margin-bottom:25px;
font-weight:bold;
font-size:18px;
}

.active{
color:#7a0000;
border-bottom:3px solid #7a0000;
padding-bottom:10px;
}

.bank-box{
background:#fff9ef;
padding:25px;
border-radius:20px;
margin-top:20px;
line-height:2;
}

.label{
font-size:18px;
color:#666;
}

.value{
font-size:30px;
font-weight:bold;
}

.input{
width:100%;
padding:20px;
margin-top:20px;
border:2px solid #eee;
border-radius:18px;
font-size:18px;
outline:none;
}

.btn{
width:100%;
padding:22px;
margin-top:25px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
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

<div class="header">

<div class="back" onclick="window.location.href='/dashboard'">
←
</div>

<div class="title">
Fund Wallet
</div>

<div style="font-size:30px;">❔</div>

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

<div class="bank-box">

<div class="label">
Bank Name
</div>

<div class="value">
Providus Bank
</div>

<br>

<div class="label">
Account Name
</div>

<div class="value">
FadaqData - John O.
</div>

<br>

<div class="label">
Account Number
</div>

<div class="value">
1234567890
</div>

</div>

<input type="number" class="input" placeholder="Enter amount">

<input type="text" class="input" placeholder="Reference ID / Description (Optional)">

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
