// 푸터에 현재 연도 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 다크 모드 전환 (선택한 테마는 브라우저에 저장)
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

try {
  const saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);
} catch (e) {}
toggle.textContent = currentTheme() === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// 좋아하는 것 카드를 누르면 강조 표시
document.querySelectorAll(".favorites li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
