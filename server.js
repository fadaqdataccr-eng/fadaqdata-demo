const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
/* =========================
   LOGIN PAGE
========================= */
app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>FadaqData Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial,sans-serif;
      }

      body{
        background:#f2f2f2;
      }

      .top{
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        padding:40px 25px 90px;
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
      }

      .top h1{
        font-size:60px;
        font-weight:bold;
      }

      .top p{
        margin-top:15px;
        font-size:20px;
        line-height:1.5;
      }

      .card{
        background:white;
        width:92%;
        margin:-55px auto 30px;
        border-radius:35px;
        padding:35px 25px;
      }

      .title{
        text-align:center;
        font-size:38px;
        font-weight:bold;
      }

      .wave{
        text-align:center;
        font-size:45px;
        margin-top:10px;
      }

      .subtitle{
        text-align:center;
        color:gray;
        margin-top:10px;
        margin-bottom:30px;
        font-size:16px;
      }

      .input{
        width:100%;
        height:65px;
        border:none;
        border-radius:18px;
        background:#efe8b8;
        padding:0 18px;
        font-size:20px;
        margin-bottom:20px;
      }

      .row{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:25px;
      }

      .forgot{
        color:#7b0000;
        font-weight:bold;
        text-decoration:none;
      }

      .btn{
        width:100%;
        height:70px;
        border:none;
        border-radius:18px;
        background:linear-gradient(to right,#7b0000,#ff0000);
        color:white;
        font-size:22px;
        font-weight:bold;
        cursor:pointer;
      }

      .or{
        text-align:center;
        font-size:28px;
        font-weight:bold;
        color:gray;
        margin:30px 0;
      }

      .google{
        width:100%;
        height:70px;
        border-radius:18px;
        border:2px solid #ddd;
        background:white;
        font-size:20px;
        font-weight:bold;
        cursor:pointer;
      }

      .bottom{
        text-align:center;
        margin-top:30px;
        font-size:18px;
      }

      .bottom a{
        color:#7b0000;
        font-weight:bold;
        text-decoration:none;
      }
    </style>
  </head>

  <body>

    <div class="top">
      <h1>FadaqData</h1>
      <p>Fadaqdata Your Data, Your Way – Anytime, Anywhere.</p>
    </div>

    <div class="card">

      <div class="title">Welcome Back!</div>
      <div class="wave">👋</div>

      <div class="subtitle">
        Login to continue to your account
      </div>

      <form action="/dashboard">

        <input 
          type="text"
          class="input"
          name="username"
          placeholder="Email, Username or Phone Number"
          required
        >

        <input 
          type="password"
          class="input"
          name="password"
          placeholder="Password"
          required
        >

        <div class="row">
          <label>
            <input type="checkbox">
            Remember Me
          </label>

          <a href="/forgot-password" class="forgot">
            Forgot Password?
          </a>
        </div>

        <button class="btn" type="submit">
          Login
        </button>

      </form>

      <div class="or">OR</div>

      <button class="google" onclick="window.location.href='/register'">
        Continue with Google
      </button>

      <div class="bottom">
        Don’t have an account?
        <a href="/register">Register</a>
      </div>

    </div>

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
    <title>Register</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial;
      }

      body{
        background:#f2f2f2;
      }

      .top{
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        padding:40px 25px 90px;
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
      }

      .top h1{
        font-size:50px;
      }

      .card{
        width:92%;
        margin:-55px auto 30px;
        background:white;
        border-radius:35px;
        padding:30px 20px;
      }

      .title{
        text-align:center;
        font-size:35px;
        font-weight:bold;
        margin-bottom:25px;
      }

      .input{
        width:100%;
        height:65px;
        border:none;
        border-radius:18px;
        background:#f3f3f3;
        padding:0 18px;
        font-size:18px;
        margin-bottom:18px;
      }

      .btn{
        width:100%;
        height:70px;
        border:none;
        border-radius:18px;
        background:linear-gradient(to right,#7b0000,#ff0000);
        color:white;
        font-size:22px;
        font-weight:bold;
        margin-top:10px;
      }

      .bottom{
        text-align:center;
        margin-top:25px;
        font-size:18px;
      }

      .bottom a{
        color:#7b0000;
        font-weight:bold;
        text-decoration:none;
      }
    </style>
  </head>

  <body>

    <div class="top">
      <h1>FadaqData</h1>
    </div>

    <div class="card">

      <div class="title">Create Account</div>

      <form action="/dashboard">

        <input class="input" type="text" placeholder="Full Name" required>
        <input class="input" type="email" placeholder="Email Address" required>
        <input class="input" type="tel" placeholder="Phone Number" required>
        <input class="input" type="password" placeholder="Password" required>

        <button class="btn">
          Register
        </button>

      </form>

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
   FORGOT PASSWORD
========================= */
app.get("/forgot-password", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Forgot Password</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      body{
        background:#f2f2f2;
        font-family:Arial;
        padding:30px;
      }

      .card{
        background:white;
        border-radius:25px;
        padding:25px;
      }

      h1{
        margin-bottom:20px;
      }

      input{
        width:100%;
        height:60px;
        border-radius:15px;
        border:1px solid #ddd;
        padding:0 15px;
        font-size:18px;
      }

      button{
        width:100%;
        height:60px;
        border:none;
        border-radius:15px;
        background:#b30000;
        color:white;
        font-size:20px;
        font-weight:bold;
        margin-top:20px;
      }
    </style>
  </head>

  <body>

    <div class="card">
      <h1>Reset Password</h1>

      <input type="email" placeholder="Enter your email">

      <button onclick="alert('Reset link sent successfully')">
        Send Reset Link
      </button>
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
    <title>Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial;
      }

      body{
        background:#f2f2f2;
      }

      .header{
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        padding:25px 20px 80px;
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
      }

      .nav{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .logo{
        font-size:30px;
        font-weight:bold;
      }

      .profile{
        width:55px;
        height:55px;
        border-radius:50%;
        background:white;
        color:#7b0000;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        font-size:28px;
      }

      .wallet{
        width:92%;
        margin:-50px auto 20px;
        background:white;
        border-radius:30px;
        padding:20px;
      }

      .wallet h2{
        color:#7b0000;
        font-size:22px;
      }

      .balance{
        font-size:55px;
        font-weight:bold;
        color:#7b0000;
        margin:15px 0;
      }

      .actions{
        display:flex;
        gap:15px;
      }

      .btn{
        flex:1;
        height:60px;
        border-radius:18px;
        border:none;
        font-size:20px;
        font-weight:bold;
        cursor:pointer;
      }

      .fund{
        background:#b30000;
        color:white;
      }

      .transfer{
        background:white;
        border:2px solid #b30000;
        color:#b30000;
      }

      .services{
        width:92%;
        margin:auto;
      }

      .services h2{
        margin-bottom:20px;
      }

      .grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:15px;
      }

      .box{
        background:white;
        border-radius:25px;
        padding:30px 15px;
        text-align:center;
        font-size:20px;
        font-weight:bold;
        box-shadow:0 2px 10px rgba(0,0,0,0.05);
        cursor:pointer;
      }

      .icon{
        font-size:40px;
        margin-bottom:15px;
      }

      .bottomnav{
        position:fixed;
        bottom:0;
        width:100%;
        background:#b30000;
        display:flex;
        justify-content:space-around;
        padding:12px 0;
        color:white;
        font-size:14px;
      }

      .bottomnav div{
        text-align:center;
      }
    </style>
  </head>

  <body>

    <div class="header">

      <div class="nav">
        <div class="logo">FadaqData</div>
        <div class="profile">F</div>
      </div>

    </div>

    <div class="wallet">

      <h2>Wallet Balance 👁️</h2>

      <div class="balance">₦25,450.00</div>

      <div class="actions">

        <button class="btn fund"
          onclick="window.location.href='/fund-wallet'">
          Fund Wallet
        </button>

        <button class="btn transfer">
          Transfer
        </button>

      </div>

    </div>

    <div class="services">

      <h2>Quick Services</h2>

      <div class="grid">

        <div class="box"
          onclick="window.location.href='/airtime'">
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

      </div>

    </div>

    <div class="bottomnav">
      <div>🏠<br>Home</div>
      <div>💼<br>Wallet</div>
      <div>📋<br>Services</div>
      <div>🧾<br>Transactions</div>
      <div>👤<br>Profile</div>
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
    <title>Buy Airtime</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial;
      }

      body{
        background:#f2f2f2;
      }

      .top{
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        text-align:center;
        padding:35px 20px 90px;
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
        font-size:28px;
        font-weight:bold;
      }

      .card{
        width:92%;
        margin:-55px auto 30px;
        background:white;
        border-radius:35px;
        padding:25px;
      }

      .tabs{
        display:flex;
        gap:10px;
        overflow:auto;
        margin-bottom:25px;
      }

      .tab{
        min-width:120px;
        height:55px;
        border-radius:18px;
        border:2px solid #ddd;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        font-size:18px;
      }

      .active{
        background:#980000;
        color:white;
        border:none;
      }

      h2{
        margin-bottom:20px;
      }

      .networks{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:15px;
        margin-bottom:25px;
      }

      .network{
      height:90px;
      border-radius:20px;
      border:2px solid #eee;
      display:flex;
      align-items:center;
      justify-content:center;
      background:white;
      padding:10px;
      overflow:hidden;
      }
      
      .network img{
      max-width:80%;
      max-height:80%;
      object-fit:contain;
      }
      
      .mtn{
        background:#ffd800;
      }

      .airtel{
        color:red;
      }

      .glo{
        color:green;
      }

      .nine{
        color:#008a3b;
      }

      .input{
        width:100%;
        height:65px;
        border-radius:18px;
        border:2px solid #eee;
        padding:0 18px;
        font-size:20px;
        margin-bottom:25px;
      }

      .amounts{
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-bottom:25px;
      }

      .amount{
        padding:16px 24px;
        border-radius:18px;
        border:2px solid #ddd;
        background:white;
        font-size:18px;
        font-weight:bold;
      }

      .selected{
        background:#980000;
        color:white;
        border:none;
      }

      .summary{
        display:flex;
        justify-content:space-between;
        border:2px solid #eee;
        border-radius:20px;
        padding:20px;
        margin-bottom:25px;
      }

      .summary h3{
        margin-bottom:10px;
      }

      .summary p{
        font-size:22px;
        font-weight:bold;
      }

      .buy{
        width:100%;
        height:70px;
        border:none;
        border-radius:20px;
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        font-size:30px;
        font-weight:bold;
      }
    </style>
  </head>

  <body>

    <div class="top">
      Buy Airtime
    </div>

    <div class="card">

      <div class="tabs">
        <div class="tab active">VTU</div>
        <div class="tab">Share & Sell</div>
        <div class="tab">MoMo</div>
        <div class="tab">GistPlus</div>
      </div>

      <h2>Network</h2>

      <div class="networks">

        <div class="network mtn">
<img src="/images/New-mtn-logo.jpg" alt="MTN">
</div>

<div class="network airtel">
<img src="/images/Airtel_logo-01.png" alt="Airtel">

<div class="network glo">
<img src="/images/recharge_com_glo_product_card.png" alt="Glo">
</div>

<div class="network nine">
<img src="/images/T2(9mobile)_big.png" alt="9mobile">
</div>

      </div>

      <input class="input" placeholder="📞 Enter phone number">

      <div class="amounts">

        <button class="amount">₦100</button>
        <button class="amount selected">₦200</button>
        <button class="amount">₦500</button>
        <button class="amount">₦1,000</button>
        <button class="amount">Other</button>

      </div>

      <div class="summary">

        <div>
          <h3>You Pay</h3>
          <p>₦200.00</p>
        </div>

        <div>
          <h3>You Receive</h3>
          <p>₦200</p>
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
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Fund Wallet</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      body{
        background:#f2f2f2;
        font-family:Arial;
      }

      .top{
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        text-align:center;
        padding:35px 20px 90px;
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
        font-size:28px;
        font-weight:bold;
      }

      .card{
        width:92%;
        margin:-55px auto 30px;
        background:white;
        border-radius:35px;
        padding:25px;
      }

      .bank{
        background:#f7f2e7;
        border-radius:25px;
        padding:25px;
        margin-bottom:25px;
      }

      .bank small{
        color:gray;
      }

      .bank h2{
        margin:12px 0 30px;
        font-size:28px;
      }

      .input{
        width:100%;
        height:65px;
        border-radius:18px;
        border:2px solid #eee;
        padding:0 18px;
        font-size:18px;
        margin-bottom:20px;
      }

      .btn{
        width:100%;
        height:70px;
        border:none;
        border-radius:20px;
        background:linear-gradient(to right,#650000,#ff0000);
        color:white;
        font-size:26px;
        font-weight:bold;
      }

      .secure{
        text-align:center;
        margin-top:25px;
        color:gray;
      }
    </style>
  </head>

  <body>

    <div class="top">
      Fund Wallet
    </div>

    <div class="card">

      <div class="bank">

        <small>Bank Name</small>
        <h2>Providus Bank</h2>

        <small>Account Name</small>
        <h2>FadaqData - John O.</h2>

        <small>Account Number</small>
        <h2>1234567890</h2>

      </div>

      <input class="input" placeholder="Enter amount">

      <input class="input"
        placeholder="Reference ID / Description (Optional)">

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

/* =========================
   SERVER
========================= */
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
