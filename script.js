const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const confessBox = document.getElementById("confessBox");
const resultBox = document.getElementById("resultBox");

function moveNoBtn() {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// PC hover
noBtn.addEventListener("mouseover", moveNoBtn);

// HP touch
noBtn.addEventListener("touchstart", moveNoBtn);

yesBtn.addEventListener("click", () => {
  confessBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  setInterval(() => {
    createEmoji();
  }, 300);
});

function createEmoji() {
  const emojis = ["💖", "🌸", "💘", "🌹", "💕", "🥰", "✨"];
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}
