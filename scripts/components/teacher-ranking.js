function renderTeacherRanking(teachers) {
  const rankingList = document.getElementById("teacherRanking");
  rankingList.innerHTML = "";

  teachers.forEach(function (teacher, index) {
    const listItem = document.createElement("li");
    listItem.className = "tlr-ranking-item";

    listItem.innerHTML = `
      <span class="tlr-rank-number">${index + 1}</span>
      <span class="tlr-ranking-avatar" aria-hidden="true">
        <svg class="tlr-ranking-avatar-icon" viewBox="0 0 24 24" focusable="false">
          <path d="M4 5.5C4 4.67 4.67 4 5.5 4H11V19H5.5C4.67 19 4 18.33 4 17.5V5.5Z"></path>
          <path d="M20 5.5C20 4.67 19.33 4 18.5 4H13V19H18.5C19.33 19 20 18.33 20 17.5V5.5Z"></path>
          <path d="M12 6.5L16.5 2L18 3.5L13.5 8L11 8.5L12 6.5Z"></path>
        </svg>
      </span>
      <div>
        <h3 class="tlr-ranking-name">${teacher.name}</h3>
        <p class="tlr-ranking-meta">${teacher.role}</p>
      </div>
      <span class="tlr-ranking-score">${teacher.score}</span>
    `;

    rankingList.appendChild(listItem);
  });
}
