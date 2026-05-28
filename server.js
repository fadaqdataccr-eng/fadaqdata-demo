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
background:linear-gradient(to right,#3b0000,#e00000);
height:280px;
padding:40px 30px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:70px;
font-weight:bold;
margin-top:20px;
}

.slogan{
font-size:25px;
margin-top:20px;
line-height:1.5;
}

.card{
background:#f5f5f5;
width:90%;
margin:-50px auto 30px;
border-radius:35px;
padding:30px;
box-shadow:0 3px 15px rgba(0,0,0,0.1);
}

.welcome{
font-size:65px;
font-weight:bold;
text-align:center;
}

.wave{
text-align:center;
font-size:60px;
margin-top:10px;
}

.sub{
text-align:center;
color:gray;
font-size:22px;
margin-top:15px;
margin-bottom:30px;
}

.input{
width:100%;
padding:22px;
border:none;
border-radius:20px;
background:#ece7b8;
font-size:22px;
margin-bottom:25px;
outline:none;
}

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
font-size:18px;
}

.forgot{
color:#6b0000;
font-weight:bold;
}

.btn{
width:100%;
padding:22px;
border:none;
border-radius:22px;
background:linear-gradient(to right,#7a0000,#ff0000);
color:white;
font-size:28px;
font-weight:bold;
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
padding:20px;
border-radius:20px;
border:3px solid #ddd;
background:white;
font-size:22px;
font-weight:bold;
}

.bottom{
text-align:center;
margin-top:35px;
font-size:22px;
}

.register{
color:#7a0000;
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

<input type="text" class="input" placeholder="Email, Username or Phone Number">

<input type="password" class="input" placeholder="Password">

<div class="row">
<div>
☐ Remember Me
</div>

<div class="forgot">
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
}

.top{
background:linear-gradient(to right,#3b0000,#7a0000);
height:260px;
padding:30px;
color:white;
position:relative;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.back{
font-size:35px;
cursor:pointer;
}

.dark{
position:absolute;
right:20px;
top:20px;
background:#fff3;
padding:10px 18px;
border-radius:20px;
font-weight:bold;
}

.top h1{
margin-top:40px;
font-size:45px;
text-align:center;
}

.top p{
text-align:center;
margin-top:10px;
font-size:20px;
}

.card{
background:white;
width:90%;
margin:-40px auto 30px;
border-radius:25px;
padding:25px;
box-shadow:0 3px 15px rgba(0,0,0,0.1);
}

.input-box{
background:#fff;
border:2px solid #eee;
border-radius:15px;
padding:16px;
margin-bottom:18px;
display:flex;
align-items:center;
}

.icon{
font-size:22px;
margin-right:12px;
color:#5c0000;
}

.input{
border:none;
outline:none;
width:100%;
font-size:18px;
}

.btn{
width:100%;
background:linear-gradient(to right,#3b0000,#8b0000);
border:none;
padding:18px;
border-radius:16px;
color:white;
font-size:24px;
font-weight:bold;
margin-top:10px;
}

.bottom{
text-align:center;
margin-top:25px;
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

<div class="top">

<div class="back" onclick="window.location.href='/'">←</div>

<div class="dark">🌙 Dark</div>

<h1>Create Account</h1>

<p>Fill in the details below to get started</p>

</div>

<div class="card">

<div class="input-box">
<div class="icon">👤</div>
<input type="text" class="input" placeholder="Full Name">
</div>

<div class="input-box">
<div class="icon">🪪</div>
<input type="text" class="input" placeholder="Username">
</div>

<div class="input-box">
<div class="icon">✉️</div>
<input type="email" class="input" placeholder="Email Address">
</div>

<div class="input-box">
<div class="icon">🇳🇬</div>
<input type="text" class="input" placeholder="Phone Number">
</div>

<div class="input-box">
<div class="icon">🔒</div>
<input type="password" class="input" placeholder="Password">
</div>

<div class="input-box">
<div class="icon">🔒</div>
<input type="password" class="input" placeholder="Confirm Password">
</div>

<div class="input-box">
<div class="icon">🎁</div>
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




// DASHBOARD PAGE
app.get("/dashboard", (req, res) => {

res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

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
background:linear-gradient(to right,#3b0000,#d40000);
padding:25px 20px;
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

.profile{
width:50px;
height:50px;
border-radius:50%;
background:white;
color:#7a0000;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
font-weight:bold;
}

.notice{
background:#f7efe8;
margin:20px;
padding:18px;
border-radius:15px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.card{
background:white;
margin:20px;
padding:25px;
border-radius:25px;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
}

.balance{
font-size:65px;
font-weight:bold;
color:#8b0000;
margin:20px 0;
}

.actions{
display:flex;
gap:15px;
}

.btn1{
flex:1;
padding:18px;
border:none;
border-radius:15px;
background:#8b0000;
color:white;
font-size:22px;
font-weight:bold;
}

.btn2{
flex:1;
padding:18px;
border-radius:15px;
border:3px solid #8b0000;
background:white;
color:#8b0000;
font-size:22px;
font-weight:bold;
}

.section{
display:flex;
justify-content:space-between;
align-items:center;
margin:20px;
font-size:20px;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
padding:0 20px;
}

.box{
background:white;
padding:30px 15px;
border-radius:22px;
text-align:center;
font-size:22px;
font-weight:bold;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
}

.icon{
font-size:50px;
margin-bottom:15px;
}

.transaction{
background:white;
margin:20px;
padding:20px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
}

.bottomnav{
position:fixed;
bottom:0;
left:0;
width:100%;
background:linear-gradient(to right,#7a0000,#d40000);
display:flex;
justify-content:space-around;
padding:15px 0;
border-top-left-radius:25px;
border-top-right-radius:25px;
color:white;
font-size:18px;
}

.navitem{
text-align:center;
}

.navicon{
font-size:32px;
margin-bottom:5px;
}

</style>
</head>

<body>

<div class="header">

<div class="logo">FadaqData</div>

<div class="profile">F</div>

</div>

<div class="notice">
<div>📢 MTN Share & Sell temporarily unavailable</div>
<div>View all</div>
</div>

<div class="card">

<h2>Wallet Balance 👁️</h2>

<div class="balance">₦0</div>

<div class="actions">

<button class="btn1">Fund Wallet</button>

<button class="btn2">Transfer</button>

</div>

</div>

<div class="section">
<div>Quick Services</div>
<div>View all</div>
</div>

<div class="grid">

<div class="box">
<div class="icon">📱</div>
Airtime
</div>

<div class="box">
<div class="icon">📶</div>
Data
</div>

<div class="box">
<div class="icon">💸</div>
Airtime2Cash
</div>

<div class="box">
<div class="icon">📺</div>
Cable TV
</div>

<div class="box">
<div class="icon">⚡</div>
Electricity
</div>

<div class="box">
<div class="icon">🎓</div>
Exam PIN
</div>

</div>

<div class="section">
<div>Recent Transactions</div>
<div>View all</div>
</div>

<div class="transaction">

<div>
<h3>MTN 500MB SME</h3>
<p>May 28, 2026 • 5:00 PM</p>
</div>

<h2 style="color:#8b0000;">- ₦100</h2>

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



app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
