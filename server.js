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

.top{
background:linear-gradient(to right,#5b0000,#d10000);
padding:50px 30px 120px;
color:white;
border-bottom-left-radius:40px;
border-bottom-right-radius:40px;
}

.logo{
font-size:58px;
font-weight:900;
margin-bottom:20px;
}

.subtitle{
font-size:22px;
line-height:1.5;
}

.card{
background:white;
width:90%;
margin:-70px auto 30px;
border-radius:35px;
padding:40px 25px;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

.welcome{
font-size:55px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
}

.small{
text-align:center;
color:gray;
font-size:20px;
margin-bottom:35px;
}

.input{
width:100%;
padding:22px;
margin-bottom:25px;
border-radius:18px;
border:2px solid #eee;
background:#f7f1c6;
font-size:18px;
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
}

.login-btn{
width:100%;
padding:22px;
border:none;
border-radius:18px;
background:linear-gradient(to right,#5b0000,#d10000);
color:white;
font-size:24px;
font-weight:bold;
margin-bottom:30px;
cursor:pointer;
}

.or{
text-align:center;
font-size:30px;
font-weight:bold;
color:gray;
margin-bottom:30px;
}

.google{
width:100%;
padding:22px;
border-radius:18px;
border:2px solid #eee;
background:white;
font-size:22px;
font-weight:bold;
cursor:pointer;
}

.bottom{
text-align:center;
margin-top:40px;
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

<div class="logo">
FadaqData
</div>

<div class="subtitle">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="card">

<div class="welcome">
Welcome Back! 👋
</div>

<div class="small">
Login to continue to your account
</div>

<input type="text" class="input" placeholder="Email, Username or Phone Number">

<input type="password" class="input" placeholder="Password">

<div class="row">

<div>
<input type="checkbox"> Remember Me
</div>

<div class="forgot">
Forgot Password?
</div>

</div>

<button class="login-btn" onclick="window.location.href='/dashboard'">
Login
</button>

<div class="or">
OR
</div>

<button class="google">
Continue with Google
</button>

<div class="bottom">
Don’t have an account?
<span class="register"> Register</span>
</div>

</div>

</body>
</html>
`);

});




// DASHBOARD
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
padding-bottom:120px;
}

.header{
background:linear-gradient(to right,#5b0000,#d10000);
padding:25px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
}

.logo{
font-size:30px;
font-weight:bold;
}

.right{
display:flex;
align-items:center;
gap:15px;
}

.notify{
font-size:35px;
position:relative;
}

.badge{
position:absolute;
top:-5px;
right:-10px;
background:red;
color:white;
font-size:12px;
width:20px;
height:20px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
}

.avatar{
width:55px;
height:55px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
color:#7a0000;
font-weight:bold;
}

.notice{
background:#f8efe9;
margin:20px;
padding:18px;
border-radius:18px;
display:flex;
justify-content:space-between;
font-weight:bold;
}

.card{
background:white;
margin:20px;
padding:25px;
border-radius:30px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.balance{
font-size:55px;
font-weight:bold;
color:#7a0000;
margin:20px 0;
}

.actions{
display:flex;
gap:15px;
margin-top:20px;
}

.btn1{
flex:1;
padding:18px;
border:none;
border-radius:15px;
background:linear-gradient(to right,#5b0000,#d10000);
color:white;
font-size:20px;
font-weight:bold;
}

.btn2{
flex:1;
padding:18px;
border-radius:15px;
border:3px solid #7a0000;
background:white;
color:#7a0000;
font-size:20px;
font-weight:bold;
}

.section{
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
margin-top:10px;
}

.section h2{
font-size:25px;
}

.view{
color:#7a0000;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
padding:20px;
}

.box{
background:white;
border-radius:25px;
padding:30px 15px;
text-align:center;
box-shadow:0 4px 10px rgba(0,0,0,0.06);
font-size:22px;
font-weight:bold;
}

.icon{
font-size:50px;
margin-bottom:15px;
}

.tx{
background:white;
margin:20px;
padding:18px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 4px 10px rgba(0,0,0,0.06);
}

.lefttx{
display:flex;
gap:15px;
align-items:center;
}

.mtn{
background:#ffd400;
padding:18px;
border-radius:18px;
font-weight:bold;
}

.name{
font-size:18px;
font-weight:bold;
}

.time{
color:gray;
margin-top:5px;
}

.amount{
font-size:22px;
font-weight:bold;
color:#7a0000;
}

.bottomnav{
position:fixed;
bottom:0;
left:0;
right:0;
background:linear-gradient(to right,#5b0000,#d10000);
display:flex;
justify-content:space-around;
padding:18px 0;
border-top-left-radius:25px;
border-top-right-radius:25px;
color:white;
font-size:18px;
}

.navitem{
text-align:center;
}

.navicon{
font-size:30px;
margin-bottom:5px;
}

</style>
</head>

<body>

<div class="header">

<div class="logo">
FadaqData
</div>

<div class="right">

<div class="notify">
🔔
<div class="badge">3</div>
</div>

<div class="avatar">
F
</div>

</div>

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
<h2>Quick Services</h2>
<div class="view">View all</div>
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
Airtime to Cash
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
<h2>Recent Transactions</h2>
<div class="view">View all</div>
</div>

<div class="tx">

<div class="lefttx">

<div class="mtn">MTN</div>

<div>
<div class="name">MTN 500MB SME</div>
<div class="time">May 28, 2026 • 5:00 PM</div>
</div>

</div>

<div class="amount">
- ₦100
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



app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
