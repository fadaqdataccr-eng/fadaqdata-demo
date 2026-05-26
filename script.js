let balance = 0;
let totalFunding = 0;
let transactionCount = 0;

function updateBalance() {
  document.getElementById("balance").innerText =
    "₦" + balance.toFixed(2);

  document.getElementById("fundingStat").innerText =
    "₦" + totalFunding;

  document.getElementById("transactionStat").innerText =
    transactionCount;
}

function addHistory(text) {
  const historyList = document.getElementById("historyList");

  if (historyList.innerHTML.includes("No transaction yet")) {
    historyList.innerHTML = "";
  }

  const item = document.createElement("p");
  item.innerText = text;

  historyList.prepend(item);

  transactionCount++;
  updateBalance();
}

function openFunding() {
  document.getElementById("fundPopup").style.display = "flex";
}

function closeFunding() {
  document.getElementById("fundPopup").style.display = "none";
}

function fundWallet() {
  let amount = document.getElementById("fundAmount").value;

  if (amount === "" || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  amount = Number(amount);

  balance += amount;
  totalFunding += amount;

  updateBalance();

  addHistory("Wallet funded ₦" + amount);

  document.getElementById("fundAmount").value = "";

  closeFunding();

  alert("Wallet funded successfully");
}

function buyData() {
  if (balance < 500) {
    alert("Insufficient balance");
    return;
  }

  balance -= 500;

  updateBalance();

  addHistory("1GB purchased - ₦500");

  alert("1GB purchased successfully");
}

function buyAirtime() {
  if (balance < 100) {
    alert("Insufficient balance");
    return;
  }

  balance -= 100;

  updateBalance();

  addHistory("Airtime purchased - ₦100");

  alert("₦100 airtime purchased");
}

function showProfile() {
  alert(
    "Username: Fadaq User\nEmail: user@fadaqdata.com"
  );
}

function scrollToHistory() {
  document.getElementById("historySection")
    .scrollIntoView({
      behavior: "smooth"
    });
}

updateBalance();
