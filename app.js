let user = localStorage.getItem("currentUser");

if (!user) {
  window.location.href = "index.html";
}

let data = JSON.parse(localStorage.getItem(user));

const rewards = [5000, 6000, 8000, 10000, 12000, 13000, 15000, 20000];

function updateUI() {
  document.getElementById("balance").textContent = data.balance;

  let historyList = document.getElementById("history");
  historyList.innerHTML = "";

  data.history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `₦${item.amount} - ${item.date}`;
    historyList.appendChild(li);
  });
}

function claimReward() {
  if (data.day >= rewards.length) data.day = 0;

  let amount = rewards[data.day];
  data.balance += amount;
  data.day++;

  data.history.push({
    amount: amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(user, JSON.stringify(data));

  alert("You received ₦" + amount);

  updateUI();
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function joinTelegram() {
  window.location.href = https://t.me/cashrewards001;
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("app").classList.remove("blur");
}

updateUI();