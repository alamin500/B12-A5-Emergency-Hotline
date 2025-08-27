// Global State
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

// DOM Elements
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const copyCountBtn = document.getElementById("copyCountBtn");
const historyContent = document.getElementById("historyContent");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".card-heart"))
      handleHeart(e.target.closest(".card-heart"));
    if (e.target.closest(".btn-copy"))
      handleCopy(e.target.closest(".btn-copy"));
    if (e.target.closest(".btn-call"))
      handleCall(e.target.closest(".btn-call"));
  });

  clearHistoryBtn.addEventListener("click", clearHistory);
}

// Heart Click Handler
function handleHeart(btn) {
  const icon = btn.querySelector("i");
  const isLiked = icon.classList.contains("fas");

  icon.className = isLiked ? "far fa-heart" : "fas fa-heart";
  btn.classList.toggle("liked", !isLiked);
  heartCount += isLiked ? -1 : 1;

  updateUI();
}

// Copy Click Handler
function handleCopy(btn) {
  const number = btn.dataset.number;
  console.log(number);
  navigator.clipboard
    .writeText(number)
    .then(() => {
      alert(`Number ${number} copied to clipboard!`);
      copyCount++;
      updateUI();

      // Visual feedback
      btn.style.cssText = "background: #27ae60; color: white;";
      setTimeout(() => (btn.style.cssText = ""), 1000);
    })
    .catch(() => alert("Failed to copy number. Please try again."));
}

// Call Click Handler
function handleCall(btn) {
  const serviceName = btn.dataset.serviceName;
  const number = btn.dataset.number;

  if (coinCount < 20) {
    alert("Insufficient coins! You need at least 20 coins to make a call.");
    return;
  }

  alert(`Calling ${serviceName} at ${number}`);
  coinCount -= 20;
  addToHistory(serviceName, number);
  updateUI();

  // Visual feedback
  btn.style.background = "#229954";
  setTimeout(() => (btn.style.background = ""), 1000);
}

// Add to Call History
function addToHistory(serviceName, number) {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  callHistory.unshift({ serviceName, number, time });
  renderHistory();
}

// Render Call History
function renderHistory() {
  if (callHistory.length === 0) {
    historyContent.innerHTML = `
            <div class="empty-history">
                <i class="fas fa-phone-slash"></i>
                <p>No calls made yet</p>
            </div>
        `;
    return;
  }

  historyContent.innerHTML = callHistory
    .map(
      (item) => `
        <div class="history-item">
            <div class="history-info">
                <div class="history-service">${item.serviceName}</div>
                <div class="history-number">${item.number}</div>
            </div>
            <div class="history-time">${item.time}</div>
        </div>
    `
    )
    .join("");
}

// Clear History
function clearHistory() {
  if (callHistory.length === 0) {
    alert("Call history is already empty!");
    return;
  }

  if (confirm("Are you sure you want to clear all call history?")) {
    callHistory = [];
    renderHistory();
    alert("Call history cleared successfully!");
  }
}

// Update UI
function updateUI() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;

  copyCountBtn.innerHTML = `<i class="fas fa-copy"></i><span>${copyCount} Copy</span>`;

  // Update call button states
  document.querySelectorAll(".btn-call").forEach((btn) => {
    const disabled = coinCount < 20;
    btn.disabled = disabled;
    btn.style.opacity = disabled ? "0.6" : "1";
  });
}

// Loading animation
window.addEventListener("load", () => {
  document.body.style.cssText =
    "opacity: 0; transition: opacity 0.5s ease-in-out;";
  setTimeout(() => (document.body.style.opacity = "1"), 100);
});
