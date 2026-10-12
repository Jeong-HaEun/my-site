// 푸터에 현재 연도 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 다크 모드 전환 (선택한 테마는 브라우저에 저장)
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// 버튼 아이콘과 설명을 "누르면 바뀔 모드"에 맞춤
function updateToggle(theme) {
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  toggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드 전환" : "다크 모드 전환");
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  updateToggle(theme);
}

try {
  const saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);
} catch (e) {}
updateToggle(currentTheme());

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
