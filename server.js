const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// LOGIN PAGE
app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FadaqData</title><style>

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
background:linear-gradient(to right,#8b0000,#ff0000);
padding:40px 30px 120px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:60px;
font-weight:bold;
margin-top:20px;
}

.tagline{
font-size:22px;
margin-top:20px;
line-height:1.5;
}

.card{
background:#f5f5f5;
width:90%;
max-width:650px;
margin:auto;
margin-top:-60px;
border-radius:40px;
padding:40px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.welcome{
font-size:70px;
font-weight:bold;
text-align:center;
}

.wave{
text-align:center;
font-size:70px;
margin-top:10px;
}

.sub{
text-align:center;
font-size:18px;
color:gray;
margin-top:15px;
margin-bottom:30px;
}

.input{
width:100%;
padding:25px;
border:none;
border-radius:20px;
margin-bottom:25px;
font-size:18px;
background:#f0ecc0;
outline:none;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
font-size:16px;
}

.forgot{
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

.btn{
width:100%;
padding:25px;
border:none;
border-radius:20px;
background:linear-gradient(to right,#8b0000,#ff0000);
color:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
}

.or{
text-align:center;
font-size:25px;
font-weight:bold;
color:gray;
margin:35px 0;
}

.google{
width:100%;
padding:22px;
border-radius:20px;
border:2px solid #ddd;
background:white;
font-size:18px;
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

</style></head><body><div class="top"><div class="logo">FadaqData</div><div class="tagline">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div></div><div class="card"><div class="welcome">Welcome Back!</div><div class="wave">👋</div><div class="sub">
Login to continue to your account
</div><input type="text" class="input" placeholder="Email, Username or Phone Number"><input type="password" class="input" placeholder="Password"><div class="row"><div>
<input type="checkbox">
Remember Me
</div><div class="forgot" onclick="window.location.href='/forgot-password'">
Forgot Password?
</div></div><button class="btn" onclick="window.location.href='/dashboard'">
Login
</button><div class="or">OR</div><button class="google" onclick="window.location.href='/register'">
Continue with Google
</button><div class="bottom">
Don’t have an account?
<span class="register" onclick="window.location.href='/register'">
Register
</span>
</div></div></body>
</html>`);

});

// REGISTER PAGE
app.get("/register", (req, res) => {

res.send(`

<!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title><style>

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

.dark{
float:right;
background:#2b0000;
padding:10px 20px;
border-radius:20px;
border:2px solid #a85b2c;
}

.title{
text-align:center;
font-size:50px;
font-weight:bold;
margin-top:40px;
}

.sub{
text-align:center;
font-size:20px;
margin-top:15px;
margin-bottom:40px;
}

.card{
background:white;
width:90%;
max-width:650px;
margin:auto;
margin-top:-20px;
padding:35px;
border-radius:35px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.input-box{
position:relative;
margin-bottom:25px;
}

.icon{
position:absolute;
left:20px;
top:22px;
font-size:25px;
}

.eye{
position:absolute;
right:20px;
top:22px;
font-size:25px;
}

.input{
width:100%;
padding:22px 22px 22px 60px;
border-radius:18px;
border:2px solid #eee;
font-size:18px;
outline:none;
}

.btn{
width:100%;
padding:22px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:22px;
font-weight:bold;
margin-top:20px;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:35px;
font-size:18px;
}

.login{
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

</style></head><body><div class="top"><div class="back" onclick="window.location.href='/'">
←
</div><div class="dark">🌙 Dark</div><div class="title">Create Account</div><div class="sub">
Fill in the details below to get started
</div></div><div class="card"><div class="input-box">
<div class="icon">👤</div>
<input type="text" class="input" placeholder="Full Name">
</div><div class="input-box">
<div class="icon">🪪</div>
<input type="text" class="input" placeholder="Username">
</div><div class="input-box">
<div class="icon">✉️</div>
<input type="email" class="input" placeholder="Email Address">
</div><div class="input-box">
<div class="icon">🇳🇬</div>
<input type="text" class="input" placeholder="Phone Number">
</div><div class="input-box">
<div class="icon">🔒</div>
<div class="eye">👁️</div>
<input type="password" class="input" placeholder="Password">
</div><div class="input-box">
<div class="icon">🔒</div>
<div class="eye">👁️</div>
<input type="password" class="input" placeholder="Confirm Password">
</div><div class="input-box">
<div class="icon">🎁</div>
<input type="text" class="input" placeholder="Referral Code (Optional)">
</div><button class="btn" onclick="window.location.href='/dashboard'">
Create Account
</button><div class="bottom">
Already have an account?
<span class="login" onclick="window.location.href='/'">
Login
</span>
</div></div></body>
</html>`);

});

// FORGOT PASSWORD PAGE
app.get("/forgot-password", (req, res) => {

res.send(`

<!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Forgot Password</title><style>

body{
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:30px;
}

.card{
background:white;
padding:30px;
border-radius:20px;
max-width:500px;
margin:auto;
margin-top:80px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

h1{
text-align:center;
margin-bottom:20px;
color:#7a0000;
}

input{
width:100%;
padding:18px;
border-radius:12px;
border:1px solid #ccc;
margin-top:20px;
font-size:18px;
}

button{
width:100%;
padding:18px;
margin-top:25px;
border:none;
border-radius:15px;
background:#8b0000;
color:white;
font-size:20px;
font-weight:bold;
}

.back{
text-align:center;
margin-top:20px;
font-size:18px;
color:#7a0000;
font-weight:bold;
cursor:pointer;
}

</style></head><body><div class="card"><h1>Forgot Password</h1><p>Enter your email address to reset your password.</p><input type="email" placeholder="Enter Email Address"><button onclick="alert('Password reset link sent')">
Send Reset Link
</button><div class="back" onclick="window.location.href='/'">
Back to Login
</div></div></body>
</html>`);

});

// DASHBOARD PAGE
app.get("/dashboard", (req, res) => {

res.send(`

<!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard</title><style>

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
background:linear-gradient(to right,#8b0000,#cc0000);
padding:25px;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
}

.logo{
font-size:28px;
font-weight:bold;
}

.right{
display:flex;
align-items:center;
gap:15px;
}

.notify{
font-size:28px;
position:relative;
}

.badge{
position:absolute;
top:-8px;
right:-8px;
background:red;
color:white;
width:18px;
height:18px;
font-size:12px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
}

.profile{
width:45px;
height:45px;
border-radius:50%;
background:white;
color:#8b0000;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:22px;
}

.notice{
background:#f5ece7;
margin:20px;
padding:15px;
border-radius:15px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.wallet{
background:white;
margin:20px;
padding:25px;
border-radius:25px;
box-shadow:0 2px 8px rgba(0,0,0,0.08);
}

.balance{
font-size:18px;
font-weight:bold;
}

.amount{
font-size:55px;
font-weight:bold;
color:#8b0000;
margin-top:15px;
}

.wallet-flex{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
}

.wallet-icon{
font-size:90px;
}

.btns{
display:flex;
gap:15px;
margin-top:20px;
}

.btn1{
background:#8b0000;
color:white;
padding:16px 28px;
border:none;
border-radius:15px;
font-size:18px;
font-weight:bold;
}

.btn2{
background:white;
color:#8b0000;
padding:16px 28px;
border:2px solid #8b0000;
border-radius:15px;
font-size:18px;
font-weight:bold;
}

.title-row{
display:flex;
justify-content:space-between;
align-items:center;
margin:20px;
}

.title{
font-size:28px;
font-weight:bold;
}

.view{
color:#8b0000;
font-weight:bold;
}

.services{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
padding:0 20px;
}

.service{
background:white;
padding:30px 15px;
border-radius:20px;
text-align:center;
font-weight:bold;
font-size:18px;
box-shadow:0 2px 8px rgba(0,0,0,0.06);
}

.icon{
font-size:45px;
margin-bottom:10px;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
width:100%;
background:#8b0000;
display:flex;
justify-content:space-around;
padding:15px 0;
border-top-left-radius:20px;
border-top-right-radius:20px;
color:white;
}

.nav-item{
text-align:center;
font-size:14px;
}

.nav-icon{
font-size:24px;
margin-bottom:5px;
}

</style></head><body><div class="header"><div class="logo">FadaqData</div><div class="right"><div class="notify">
🔔
<div class="badge">3</div>
</div><div class="profile">F</div></div></div><div class="notice">
<div>📢 MTN Share & Sell temporarily unavailable</div>
<div>View all</div>
</div><div class="wallet"><div class="balance">
Wallet Balance 👁️
</div><div class="wallet-flex"><div><div class="amount">₦0</div><div class="btns"><button class="btn1">
Fund Wallet
</button><button class="btn2">
Transfer
</button></div></div><div class="wallet-icon">👛</div></div></div><div class="title-row">
<div class="title">Quick Services</div>
<div class="view">View all</div>
</div><div class="services"><div class="service">
<div class="icon">📱</div>
Airtime
</div><div class="service">
<div class="icon">📶</div>
Data
</div><div class="service">
<div class="icon">💸</div>
Airtime2Cash
</div><div class="service">
<div class="icon">📺</div>
Cable TV
</div><div class="service">
<div class="icon">⚡</div>
Electricity
</div><div class="service">
<div class="icon">🎓</div>
Exam PIN
</div></div><div class="bottom-nav"><div class="nav-item">
<div class="nav-icon">🏠</div>
Home
</div><div class="nav-item">
<div class="nav-icon">💼</div>
Wallet
</div><div class="nav-item">
<div class="nav-icon">📋</div>
Services
</div><div class="nav-item">
<div class="nav-icon">🧾</div>
Transactions
</div><div class="nav-item">
<div class="nav-icon">👤</div>
Profile
</div></div></body>
</html>`);

});

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
