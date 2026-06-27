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

const policies = {
  terms: {
    title: "Learning Portal 이용약관",
    body: `
      <p><strong>시행일:</strong> 2026년 6월 27일</p>
      <h3>제1조 목적</h3>
      <p>이 약관은 Learning Portal이 제공하는 무료 교육용 웹 애플리케이션의 이용 조건과 운영자 및 이용자의 권리, 의무, 책임사항을 정합니다.</p>
      <h3>제2조 서비스의 제공</h3>
      <p>본 서비스는 윤리 핵심가이드 확인, 과목별 학습 앱 목록, 추천 학습, 검색 및 필터, 즐겨찾기와 최근 학습 예시 화면을 제공합니다. 본 서비스는 교육 활동 지원 목적이며 상업적으로 운영되지 않습니다.</p>
      <h3>제3조 윤리 핵심가이드 준수</h3>
      <p>이용자는 생성형 AI를 사용할 때 목적을 먼저 생각하고, 자신의 생각을 먼저 말하며, AI 결과를 비판적으로 확인하고, 개인정보와 타인의 비밀을 입력하지 않으며, AI의 도움을 받았을 때 정직하게 밝혀야 합니다.</p>
      <h3>제4조 이용자의 의무</h3>
      <p>이용자는 타인의 개인정보 무단 입력, 학습 방해, 악성 코드 삽입, 비정상 접속, 저작권 침해, 학교 규칙 및 관련 법령 위반 행위를 해서는 안 됩니다.</p>
      <h3>제5조 서비스 변경 및 중단</h3>
      <p>운영자는 수업 운영, 기술적 사정, 외부 플랫폼 문제 등에 따라 서비스의 전부 또는 일부를 변경하거나 일시 중단할 수 있습니다. 본 서비스는 무료 교육용 서비스이므로 서비스 중단에 따른 별도 보상은 제공되지 않습니다.</p>
      <h3>제6조 저작권 및 콘텐츠 이용</h3>
      <p>서비스의 화면, 코드, 이미지, 문서 등 콘텐츠 권리는 운영자 또는 정당한 권리자에게 있습니다. 이용자는 수업 및 학습 목적 범위에서 서비스를 이용할 수 있습니다.</p>
      <h3>제7조 문의</h3>
      <p>서비스 이용, 오류, 개인정보 보호, 약관 관련 문의는 정보관리책임자에게 연락할 수 있습니다.</p>
      <p class="policy-note">전체 검토용 문서는 저장소의 이용약관.md 파일을 기준으로 관리합니다.</p>
    `,
  },
  privacy: {
    title: "Learning Portal 개인정보처리방침",
    body: `
      <p><strong>시행일:</strong> 2026년 6월 27일</p>
      <h3>1. 개인정보 처리 목적</h3>
      <p>본 서비스는 초등학생의 학습 활동을 지원하기 위한 교육용 웹 애플리케이션입니다. 학습 앱 목록, 추천 학습, 최근 학습 등 교육 활동 지원과 서비스 안정화를 목적으로 개인정보를 최소 범위에서만 처리합니다.</p>
      <h3>2. 처리하는 개인정보 항목</h3>
      <p>현재 버전은 로그인, 회원가입, 서버 저장 기능을 제공하지 않는 정적 웹앱이므로 이름, 연락처, 주소, 주민등록번호 등 직접 식별 가능한 개인정보를 입력받지 않습니다.</p>
      <h3>3. 보유 기간</h3>
      <p>현재 버전은 서버에 개인정보를 저장하지 않습니다. 향후 학습 기록 저장 기능이 추가될 경우 수집 목적 달성 또는 해당 학년도 종료 후 지체 없이 파기합니다.</p>
      <h3>4. 만 14세 미만 아동</h3>
      <p>만 14세 미만 아동의 개인정보 처리가 필요한 기능이 추가되는 경우 법정대리인 또는 학교의 적법한 동의 절차를 거칩니다.</p>
      <h3>5. 제3자 제공 및 위탁</h3>
      <p>본 서비스는 이용자의 개인정보를 제3자에게 제공하지 않으며 현재 개인정보 처리 위탁도 하지 않습니다. 단, GitHub, Vercel 등 배포 플랫폼은 접속 로그를 자체 정책에 따라 처리할 수 있습니다.</p>
      <h3>6. 안전성 확보 조치</h3>
      <p>개인정보 수집 최소화, HTTPS 접속, 관리자 접근 권한 최소화, 불필요한 개인정보 입력란 배제를 원칙으로 합니다.</p>
      <h3>7. 정보관리책임자</h3>
      <p>정보관리책임자: 김정호 · 소속: 서울원묵초등학교 · 문의: 02-3421-2100</p>
      <p class="policy-note">전체 검토용 문서는 저장소의 개인정보처리방침.md 파일을 기준으로 관리합니다.</p>
    `,
  },
};

let activeFilter = "all";
let favorites = new Set(["fraction-lab", "english-word-game"]);

const ethicsGate = document.querySelector("#ethicsGate");
const ethicsEnterButton = document.querySelector("#ethicsEnterButton");
const activityShell = document.querySelector("#activityShell");
const appGrid = document.querySelector("#appGrid");
const recommendedApps = document.querySelector("#recommendedApps");
const favoritePanel = document.querySelector("#favoritePanel");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const policyModal = document.querySelector("#policyModal");
const policyDialog = document.querySelector(".policy-dialog");
const policyTitle = document.querySelector("#policyTitle");
const policyContent = document.querySelector("#policyContent");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function unlockActivity() {
  ethicsGate.classList.add("is-complete");
  activityShell.classList.remove("is-locked");
  activityShell.removeAttribute("aria-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openPolicyModal(type) {
  const policy = policies[type];
  if (!policy) return;
  policyTitle.textContent = policy.title;
  policyContent.innerHTML = policy.body;
  policyModal.classList.add("is-open");
  policyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  policyDialog.focus();
}

function closePolicyModal() {
  policyModal.classList.remove("is-open");
  policyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
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
  apps
    .filter((app) => app.recommended)
    .slice(0, 3)
    .forEach((app) => recommendedApps.appendChild(createCard(app)));
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
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    event.preventDefault();
    const id = favoriteButton.dataset.favorite;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    renderRecommended();
    renderApps();
    return;
  }

  const policyButton = event.target.closest("[data-policy]");
  if (policyButton) {
    openPolicyModal(policyButton.dataset.policy);
  }
});

document.querySelectorAll("[data-close-policy]").forEach((button) => {
  button.addEventListener("click", closePolicyModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && policyModal.classList.contains("is-open")) {
    closePolicyModal();
  }
});

ethicsEnterButton.addEventListener("click", unlockActivity);
searchInput.addEventListener("input", renderApps);

renderRecommended();
renderApps();
refreshIcons();
