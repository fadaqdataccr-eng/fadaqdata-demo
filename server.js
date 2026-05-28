const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
font-family:Arial, sans-serif;
}

body{
background:#f3f3f3;
min-height:100vh;
}

/* HEADER */

.top-header{
background:linear-gradient(to right,#5b0000,#cc0000);
padding:40px 25px 90px;
border-bottom-left-radius:30px;
border-bottom-right-radius:30px;
color:white;
}

.logo{
font-size:50px;
font-weight:900;
}

.tagline{
margin-top:10px;
font-size:18px;
line-height:1.5;
}

/* LOGIN CARD */

.login-container{
margin-top:-50px;
padding:20px;
}

.login-box{
background:white;
border-radius:30px;
padding:30px 25px;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
}

.login-title{
text-align:center;
font-size:35px;
font-weight:bold;
margin-bottom:10px;
}

.subtitle{
text-align:center;
color:gray;
margin-bottom:30px;
font-size:15px;
}

/* INPUTS */

.input-group{
margin-bottom:20px;
}

.input-group input{
width:100%;
padding:18px;
border:2px solid #eee;
border-radius:15px;
font-size:16px;
outline:none;
}

/* OPTIONS */

.row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
font-size:14px;
}

.row a{
color:#7a0000;
text-decoration:none;
font-weight:bold;
}

/* BUTTON */

.login-btn{
width:100%;
padding:18px;
border:none;
border-radius:15px;
background:linear-gradient(to right,#5b0000,#c40000);
color:white;
font-size:20px;
font-weight:bold;
cursor:pointer;
}

/* OR */

.or{
text-align:center;
margin:25px 0;
color:gray;
font-weight:bold;
}

/* GOOGLE */

.google-btn{
width:100%;
padding:16px;
border:2px solid #eee;
border-radius:15px;
background:white;
font-size:18px;
font-weight:bold;
cursor:pointer;
}

/* REGISTER */

.register{
text-align:center;
margin-top:30px;
font-size:16px;
}

.register a{
color:#7a0000;
font-weight:bold;
text-decoration:none;
}

</style>

</head>

<body>

<div class="top-header">

<div class="logo">
FadaqData
</div>

<div class="tagline">
Fadaqdata Your Data, Your Way – Anytime, Anywhere.
</div>

</div>

<div class="login-container">

<div class="login-box">

<div class="login-title">
Welcome Back! 👋
</div>

<div class="subtitle">
Login to continue to your account
</div>

<form action="/dashboard">

<div class="input-group">
<input type="text" placeholder="Email, Username or Phone Number">
</div>

<div class="input-group">
<input type="password" placeholder="Password">
</div>

<div class="row">

<label>
<input type="checkbox">
Remember Me
</label>

<a href="#">
Forgot Password?
</a>

</div>

<button class="login-btn">
Login
</button>

</form>

<div class="or">
OR
</div>

<button class="google-btn">
Continue with Google
</button>

<div class="register">
Don’t have an account?
<a href="#">Register</a>
</div>

</div>

</div>

</body>
</html>

`);

});

/* DASHBOARD */

app.get("/dashboard", (req, res) => {

res.send(`

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Dashboard</title>

<style>

body{
margin:0;
font-family:Arial;
background:#f3f3f3;
}

.header{
background:linear-gradient(to right,#5b0000,#cc0000);
padding:25px;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom-left-radius:25px;
border-bottom-right-radius:25px;
}

.logo{
font-size:35px;
font-weight:bold;
}

.profile{
background:white;
color:#7a0000;
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
font-weight:bold;
}

.container{
padding:20px;
}

.card{
background:white;
padding:25px;
border-radius:25px;
margin-bottom:20px;
}

.balance{
font-size:50px;
font-weight:bold;
color:#7a0000;
margin-top:15px;
}

.buttons{
display:flex;
gap:15px;
margin-top:20px;
}

.btn{
flex:1;
padding:16px;
border:none;
border-radius:15px;
font-size:18px;
font-weight:bold;
cursor:pointer;
}

.primary{
background:#8b0000;
color:white;
}

.outline{
background:white;
border:2px solid #8b0000;
color:#8b0000;
}

.section-title{
font-size:35px;
font-weight:bold;
margin:20px 0;
}

.services{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.service{
background:white;
padding:30px 20px;
border-radius:20px;
text-align:center;
font-size:22px;
font-weight:bold;
}

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
background:#b00000;
display:flex;
justify-content:space-around;
padding:15px;
color:white;
font-size:18px;
}

</style>
</head>

<body>

<div class="header">

<div class="logo">
FadaqData
</div>

<div class="profile">
F
</div>

</div>

<div class="container">

<div class="card">

<h2>Wallet Balance 👁️</h2>

<div class="balance">
₦0
</div>

<div class="buttons">

<button class="btn primary">
Fund Wallet
</button>

<button class="btn outline">
Transfer
</button>

</div>

</div>

<div class="section-title">
Quick Services
</div>

<div class="services">

<div class="service">
📱<br><br>
Airtime
</div>

<div class="service">
📶<br><br>
Data
</div>

<div class="service">
💸<br><br>
Airtime2Cash
</div>

<div class="service">
📺<br><br>
Cable TV
</div>

<div class="service">
⚡<br><br>
Electricity
</div>

<div class="service">
🎓<br><br>
Exam PIN
</div>

</div>

</div>

<div class="bottom-nav">

<div>🏠 Home</div>
<div>📋 Transactions</div>
<div>🔔 Notifications</div>
<div>👤 Profile</div>

</div>

</body>
</html>

`);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running...");
});
