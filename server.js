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
background:linear-gradient(to right,#3b0000,#d40000);
padding:40px 25px 120px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:60px;
font-weight:bold;
}

.subtitle{
font-size:24px;
margin-top:20px;
line-height:1.5;
}

.card{
width:90%;
max-width:650px;
margin:auto;
background:#f7f7f7;
margin-top:-70px;
border-radius:40px;
padding:35px;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.welcome{
font-size:70px;
font-weight:bold;
text-align:center;
}

.wave{
font-size:60px;
text-align:center;
}

.small{
text-align:center;
font-size:22px;
color:gray;
margin-top:15px;
margin-bottom:35px;
}

.input{
width:100%;
padding:25px;
border:none;
border-radius:20px;
background:#ece8b5;
margin-bottom:25px;
font-size:22px;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
font-size:18px;
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
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:30px;
font-weight:bold;
cursor:pointer;
}

.or{
text-align:center;
font-size:30px;
font-weight:bold;
color:gray;
margin:35px 0;
}

.google{
width:100%;
padding:25px;
border-radius:20px;
border:2px solid #ddd;
background:white;
font-size:24px;
font-weight:bold;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:35px;
font-size:20px;
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

<div class="small">
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
}

.header{
background:linear-gradient(to right,#2b0000,#7a0000);
padding:35px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.back{
font-size:35px;
cursor:pointer;
}

.title{
font-size:55px;
font-weight:bold;
text-align:center;
margin-top:20px;
}

.sub{
text-align:center;
font-size:22px;
margin-top:10px;
}

.card{
width:90%;
max-width:650px;
margin:auto;
margin-top:-20px;
background:white;
padding:30px;
border-radius:35px;
}

.input{
width:100%;
padding:22px;
margin-bottom:20px;
border-radius:18px;
border:2px solid #eee;
font-size:20px;
}

.btn{
width:100%;
padding:22px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:28px;
font-weight:bold;
cursor:pointer;
margin-top:10px;
}

.bottom{
text-align:center;
margin-top:30px;
font-size:20px;
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
<html>
<head>
<title>Forgot Password</title>

<style>

body{
font-family:Arial;
background:#f5f5f5;
padding:40px;
}

.box{
background:white;
padding:40px;
border-radius:20px;
max-width:500px;
margin:auto;
margin-top:100px;
}

h1{
color:#7a0000;
margin-bottom:20px;
}

input{
width:100%;
padding:18px;
border-radius:10px;
border:1px solid #ddd;
font-size:18px;
margin-top:20px;
}

button{
width:100%;
padding:18px;
margin-top:25px;
background:#7a0000;
color:white;
border:none;
border-radius:10px;
font-size:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="box">

<h1>Forgot Password</h1>

<p>Enter your email to reset your password.</p>

<input type="email" placeholder="Enter Email">

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
padding:25px;
}

.title{
font-size:55px;
font-weight:bold;
color:#7a0000;
margin-top:40px;
}

.card{
background:white;
padding:35px;
border-radius:25px;
margin-top:30px;
font-size:24px;
}

.btn{
width:100%;
padding:22px;
margin-top:30px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:24px;
font-weight:bold;
cursor:pointer;
}

</style>

</head>

<body>

<div class="title">
FadaqData Dashboard
</div>

<div class="card">
Welcome to your dashboard.
</div>

<button class="btn" onclick="window.location.href='/fund-wallet'">
Fund Wallet
</button>

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
min-height:100vh;
}

.header{
background:linear-gradient(to right,#2b0000,#7a0000);
padding:25px;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom-left-radius:30px;
border-bottom-right-radius:30px;
}

.back{
font-size:35px;
cursor:pointer;
}

.title{
font-size:32px;
font-weight:bold;
}

.help{
font-size:32px;
}

.container{
width:90%;
max-width:650px;
margin:auto;
margin-top:20px;
background:white;
border-radius:30px;
padding:25px;
}

.tabs{
display:flex;
justify-content:space-between;
font-size:20px;
font-weight:bold;
margin-bottom:30px;
border-bottom:2px solid #eee;
}

.tab{
padding-bottom:15px;
width:50%;
text-align:center;
}

.active{
border-bottom:4px solid #7a0000;
color:#7a0000;
}

.bank-card{
background:#fff9ef;
padding:25px;
border-radius:20px;
margin-bottom:25px;
position:relative;
}

.label{
font-size:18px;
color:#555;
margin-top:15px;
}

.value{
font-size:20px;
font-weight:bold;
margin-top:8px;
}

.copy{
position:absolute;
right:20px;
bottom:20px;
font-size:35px;
}

.input-box{
background:white;
border:2px solid #eee;
border-radius:20px;
padding:22px;
margin-top:20px;
font-size:20px;
}

.input{
border:none;
outline:none;
font-size:20px;
width:100%;
margin-top:10px;
}

.btn{
width:100%;
padding:22px;
margin-top:30px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#2b0000,#7a0000);
color:white;
font-size:25px;
font-weight:bold;
cursor:pointer;
}

.secure{
text-align:center;
margin-top:25px;
font-size:18px;
color:#555;
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

<div class="help">
❔
</div>

</div>

<div class="container">

<div class="tabs">

<div class="tab active">
Automated Funding
</div>

<div class="tab">
Manual Funding
</div>

</div>

<div class="bank-card">

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

<div class="copy">
📋
</div>

</div>

<div class="input-box">

<div>₦ Enter amount</div>

<input type="number" class="input">

</div>

<div class="input-box">

<div>Reference ID / Description (Optional)</div>

<input type="text" class="input" placeholder="Enter reference or description">

</div>

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
