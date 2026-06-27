const subjectStyles = {
  국어: { color: "#ef4444", icon: "book-open" },
  수학: { color: "#3b82f6", icon: "calculator" },
  사회: { color: "#f97316", icon: "globe-2" },
  과학: { color: "#22c55e", icon: "flask-conical" },
  AI: { color: "#8b5cf6", icon: "bot" },
  영어: { color: "#06b6d4", icon: "languages" },
};

const apps = [
  {
    id: "korean-reading",
    title: "문해력 탐험대",
    subject: "국어",
    grade: "3-5학년",
    description: "짧은 글을 읽고 핵심 문장, 낱말 뜻, 추론 문제를 차근차근 해결해요.",
    tags: ["독해", "어휘"],
    recommended: true,
  },
  {
    id: "fraction-lab",
    title: "분수 실험실",
    subject: "수학",
    grade: "4-6학년",
    description: "그림 조각을 움직이며 분수의 크기, 덧셈, 뺄셈을 눈으로 익혀요.",
    tags: ["분수", "개념"],
    recommended: true,
  },
  {
    id: "map-journey",
    title: "우리나라 지도 여행",
    subject: "사회",
    grade: "3-5학년",
    description: "지역, 지형, 문화유산을 지도 위에서 찾아보며 사회 개념을 연결해요.",
    tags: ["지도", "지역"],
    recommended: false,
  },
  {
    id: "plant-cycle",
    title: "식물 성장 관찰",
    subject: "과학",
    grade: "3-4학년",
    description: "씨앗부터 꽃까지 변화 과정을 기록하고 관찰 퀴즈로 확인해요.",
    tags: ["생명", "관찰"],
    recommended: true,
  },
  {
    id: "ai-pattern",
    title: "AI 패턴 찾기",
    subject: "AI",
    grade: "5-6학년",
    description: "이미지와 숫자 규칙을 분류하며 인공지능의 기본 원리를 경험해요.",
    tags: ["분류", "패턴"],
    recommended: false,
  },
  {
    id: "english-word-game",
    title: "영단어 카드 게임",
    subject: "영어",
    grade: "3-6학년",
    description: "듣기, 뜻 맞히기, 문장 만들기를 게임처럼 반복해 단어를 기억해요.",
    tags: ["단어", "듣기"],
    recommended: true,
  },
  {
    id: "science-quiz",
    title: "과학 개념 퀴즈",
    subject: "과학",
    grade: "5-6학년",
    description: "실험 상황을 보고 알맞은 원리와 결과를 고르는 빠른 복습 퀴즈예요.",
    tags: ["퀴즈", "복습"],
    recommended: false,
  },
  {
    id: "math-speed",
    title: "연산 스프린트",
    subject: "수학",
    grade: "3-6학년",
    description: "덧셈, 나눗셈, 혼합 계산을 짧은 라운드로 연습하고 기록을 높여요.",
    tags: ["연산", "기록"],
    recommended: false,
  },
];

let activeFilter = "all";
let favorites = new Set(["fraction-lab", "english-word-game"]);

const appGrid = document.querySelector("#appGrid");
const recommendedApps = document.querySelector("#recommendedApps");
const favoritePanel = document.querySelector("#favoritePanel");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function createCard(app) {
  const style = subjectStyles[app.subject];
  const isFavorite = favorites.has(app.id);
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-top">
      <span class="subject-icon" style="background:${style.color}">
        <i data-lucide="${style.icon}"></i>
      </span>
      <button class="favorite-button ${isFavorite ? "active" : ""}" data-favorite="${app.id}" aria-label="${app.title} 즐겨찾기">
        <i data-lucide="star"></i>
      </button>
    </div>
    <div>
      <h3>${app.title}</h3>
      <p>${app.description}</p>
    </div>
    <div class="meta-row">
      <span class="pill">${app.subject}</span>
      <span class="pill">${app.grade}</span>
      ${app.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
    </div>
    <a class="start-button" href="#" style="background:${style.color}">
      <i data-lucide="play"></i> 시작하기
    </a>
  `;
  return card;
}

function getFilteredApps() {
  const keyword = searchInput.value.trim().toLowerCase();
  return apps.filter((app) => {
    const filterMatch =
      activeFilter === "all" ||
      app.subject === activeFilter ||
      (activeFilter === "recommended" && app.recommended);
    const searchMatch = [app.title, app.subject, app.grade, app.description, ...app.tags]
      .join(" ")
      .toLowerCase()
      .includes(keyword);
    return filterMatch && searchMatch;
  });
}

function renderApps() {
  const filteredApps = getFilteredApps();
  appGrid.innerHTML = "";
  filteredApps.forEach((app) => appGrid.appendChild(createCard(app)));
  resultCount.textContent = `${filteredApps.length}개의 학습`;
  emptyState.style.display = filteredApps.length ? "none" : "block";
  renderFavorites();
  refreshIcons();
}

function renderRecommended() {
  recommendedApps.innerHTML = "";
  apps.filter((app) => app.recommended).slice(0, 3).forEach((app) => {
    recommendedApps.appendChild(createCard(app));
  });
}

function renderFavorites() {
  const favoriteApps = apps.filter((app) => favorites.has(app.id));
  favoritePanel.innerHTML = favoriteApps.length
    ? favoriteApps
        .map((app) => {
          const style = subjectStyles[app.subject];
          return `
            <article class="favorite-item">
              <span class="dot" style="background:${style.color}"></span>
              <div>
                <strong>${app.title}</strong>
                <p>${app.subject} · ${app.grade}</p>
              </div>
            </article>
          `;
        })
        .join("")
    : `<article class="favorite-item"><div><strong>아직 즐겨찾기가 없어요</strong><p>자주 쓰는 학습의 별표를 눌러보세요.</p></div></article>`;
}

document.querySelectorAll(".nav-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".nav-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderApps();
  });
});

document.querySelector("[data-filter='recommended']").addEventListener("click", () => {
  activeFilter = "recommended";
  document.querySelectorAll(".nav-chip").forEach((chip) => chip.classList.remove("active"));
  renderApps();
  document.querySelector("#apps").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  event.preventDefault();
  const id = button.dataset.favorite;
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  renderRecommended();
  renderApps();
});

searchInput.addEventListener("input", renderApps);

renderRecommended();
renderApps();
refreshIcons();
