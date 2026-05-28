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
background:linear-gradient(to right,#3b0000,#7a0000,#ff0000);
padding:40px 25px 90px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:38px;
font-weight:bold;
margin-bottom:20px;
}

.subtitle{
font-size:18px;
line-height:1.6;
}

.card{
background:white;
width:90%;
max-width:500px;
margin:-50px auto 30px;
padding:30px 25px;
border-radius:35px;
box-shadow:0 5px 20px rgba(0,0,0,0.1);
text-align:center;
}

.welcome{
font-size:42px;
font-weight:bold;
margin-bottom:10px;
}

.wave{
font-size:50px;
margin-bottom:20px;
}

.desc{
color:gray;
font-size:18px;
margin-bottom:30px;
}

.input{
width:100%;
padding:20px;
margin-bottom:20px;
border:none;
border-radius:18px;
background:#f0ecb8;
font-size:18px;
outline:none;
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
cursor:pointer;
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
cursor:pointer;
margin-bottom:25px;
}

.or{
font-size:28px;
font-weight:bold;
color:gray;
margin-bottom:25px;
}

.google{
width:100%;
padding:20px;
border:2px solid #eee;
border-radius:20px;
background:white;
font-size:20px;
font-weight:bold;
cursor:pointer;
margin-bottom:30px;
}

.bottom{
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
<div class="logo">FadaqData</div>

<div class="subtitle">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>
</div>

<div class="card">

<div class="welcome">Welcome Back!</div>

<div class="wave">👋</div>

<div class="desc">
Login to continue to your account
</div>

<input type="text" class="input" placeholder="Email, Username or Phone Number">

<input type="password" class="input" placeholder="Password">

<div class="row">
<label>
<input type="checkbox">
Remember Me
</label>

<div class="forgot" onclick="window.location.href='/forgot-password'">
Forgot Password?
</div>
</div>

<button class="btn" onclick="window.location.href='/dashboard'">
Login
</button>

<div class="or">OR</div>

<button class="google" onclick="window.location.href='/register'">
Continue with Google
</button>

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

/* REGISTER PAGE */
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
}

.top{
background:linear-gradient(to right,#2b0000,#5c0000);
padding:30px 20px 80px;
color:white;
border-bottom-left-radius:35px;
border-bottom-right-radius:35px;
position:relative;
}

.back{
font-size:35px;
margin-bottom:30px;
cursor:pointer;
}

.title{
text-align:center;
font-size:40px;
font-weight:bold;
margin-bottom:10px;
}

.sub{
text-align:center;
font-size:18px;
}

.card{
background:white;
width:90%;
max-width:500px;
margin:-40px auto 30px;
padding:25px;
border-radius:30px;
box-shadow:0 5px 20px rgba(0,0,0,0.1);
}

.input{
width:100%;
padding:18px;
margin-bottom:18px;
border:2px solid #eee;
border-radius:15px;
font-size:18px;
outline:none;
}

.btn{
width:100%;
padding:18px;
border:none;
border-radius:15px;
background:linear-gradient(to right,#3b0000,#7a0000);
color:white;
font-size:24px;
font-weight:bold;
cursor:pointer;
margin-top:10px;
}

.bottom{
text-align:center;
margin-top:25px;
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

<div class="back" onclick="window.location.href='/'">
←
</div>

<div class="title">Create Account</div>

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

/* FORGOT PASSWORD PAGE */
app.get("/forgot-password", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Forgot Password</title>

<style>

body{
font-family:Arial;
background:#f5f5f5;
padding:30px;
}

.card{
background:white;
padding:30px;
border-radius:20px;
max-width:500px;
margin:auto;
margin-top:100px;
text-align:center;
}

h1{
margin-bottom:20px;
color:#7a0000;
}

input{
width:100%;
padding:18px;
margin-top:20px;
border-radius:15px;
border:1px solid #ddd;
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

.back{
margin-top:20px;
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

</style>

</head>

<body>

<div class="card">

<h1>Forgot Password</h1>

<p>Enter your email address to reset your password</p>

<input type="email" placeholder="Email Address">

<button>Reset Password</button>

<div class="back" onclick="window.location.href='/'">
Back to Login
</div>

</div>

</body>
</html>
`);
});

/* DASHBOARD PAGE */
app.get("/dashboard", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard</title>

<style>

body{
margin:0;
font-family:Arial;
background:#f5f5f5;
}

.header{
background:#980000;
padding:20px;
color:white;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:22px;
font-weight:bold;
}

.notify{
font-size:30px;
}

.balance{
background:white;
margin:20px;
padding:20px;
border-radius:20px;
}

.amount{
font-size:50px;
font-weight:bold;
color:#980000;
margin:20px 0;
}

.btns{
display:flex;
gap:15px;
}

.btn{
flex:1;
padding:15px;
border:none;
border-radius:12px;
font-size:18px;
font-weight:bold;
cursor:pointer;
}

.red{
background:#980000;
color:white;
}

.white{
background:white;
border:2px solid #980000;
color:#980000;
}

.section{
padding:0 20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:15px;
margin-top:15px;
}

.box{
background:white;
padding:20px 10px;
border-radius:18px;
text-align:center;
font-weight:bold;
}

.bottomnav{
position:fixed;
bottom:0;
width:100%;
background:#980000;
display:flex;
justify-content:space-around;
padding:12px 0;
color:white;
}

.navitem{
text-align:center;
font-size:14px;
}

.navicon{
font-size:24px;
}

</style>

</head>
<body>

<div class="header">
<div class="logo">FadaqData</div>
<div class="notify">🔔</div>
</div>

<div class="balance">

<h2>Wallet Balance 👁️</h2>

<div class="amount">₦0</div>

<div class="btns">

<button class="btn red" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

<button class="btn white">
Transfer
</button>

</div>

</div>

<div class="section">

<h1>Quick Services</h1>

<div class="grid">

<div class="box">📱<br><br>Airtime</div>

<div class="box">📶<br><br>Data</div>

<div class="box">💸<br><br>Airtime2Cash</div>

<div class="box">📺<br><br>Cable TV</div>

<div class="box">⚡<br><br>Electricity</div>

<div class="box">🎓<br><br>Exam PIN</div>

</div>

</div>

<div class="bottomnav">

<div class="navitem">
<div class="navicon">🏠</div>
Home
</div>

<div class="navitem">
<div class="navicon">💼</div>
Wallet
</div>

<div class="navitem">
<div class="navicon">📋</div>
Services
</div>

<div class="navitem">
<div class="navicon">🧾</div>
Transactions
</div>

<div class="navitem">
<div class="navicon">👤</div>
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
<title>Fund Wallet</title>

<style>

body{
margin:0;
font-family:Arial;
background:#f5f5f5;
}

.header{
background:linear-gradient(to right,#2b0000,#5c0000);
padding:20px;
color:white;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
font-size:24px;
font-weight:bold;
}

.container{
padding:20px;
}

.tabs{
display:flex;
background:white;
border-radius:15px;
overflow:hidden;
margin-bottom:20px;
}

.tab{
flex:1;
padding:15px;
text-align:center;
font-weight:bold;
border-bottom:3px solid #7a0000;
}

.card{
background:#fff8ef;
padding:20px;
border-radius:20px;
margin-bottom:20px;
}

.label{
font-size:18px;
color:gray;
margin-top:15px;
}

.value{
font-size:30px;
font-weight:bold;
margin-top:5px;
}

.input{
width:100%;
padding:20px;
border-radius:15px;
border:1px solid #ddd;
font-size:18px;
margin-bottom:20px;
}

.btn{
width:100%;
padding:20px;
border:none;
border-radius:15px;
background:linear-gradient(to right,#3b0000,#7a0000);
color:white;
font-size:24px;
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

<div onclick="window.location.href='/dashboard'" style="cursor:pointer">
←
</div>

<div>Fund Wallet</div>

<div>❔</div>

</div>

<div class="container">

<div class="tabs">

<div class="tab">
Automated Funding
</div>

<div class="tab" style="border-bottom:none;color:gray;">
Manual Funding
</div>

</div>

<div class="card">

<div class="label">Bank Name</div>
<div class="value">Providus Bank</div>

<div class="label">Account Name</div>
<div class="value">FadaqData - John O.</div>

<div class="label">Account Number</div>
<div class="value">1234567890</div>

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
