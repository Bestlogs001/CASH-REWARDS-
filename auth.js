const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem(username));

  if (!user || user.password !== password) {
    error.textContent = "Invalid login details";
  } else {
    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
  }
});

function signup() {
  let username = prompt("Create username:");
  let password = prompt("Create password:");

  if (!username || !password) return;

  localStorage.setItem(username, JSON.stringify({
    password: password,
    balance: 0,
    day: 0,
    history: []
  }));

  alert("Account created! Now login.");
}